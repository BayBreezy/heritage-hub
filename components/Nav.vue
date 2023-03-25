<template>
  <header
    class="sticky top-0 z-40 mx-auto flex h-auto max-w-desktop flex-col items-center justify-between border-b bg-white/80 py-5 px-5 backdrop-blur dark:border-gray-900 dark:bg-dark/80 md:h-20 md:flex-row md:py-0"
  >
    <div>
      <NuxtLink class="text-lg font-semibold" to="/">Heritage Hub</NuxtLink>
    </div>
    <div class="mt-5 flex items-center gap-x-3 md:mt-0">
      <button @click="search = true" class="btn text-xs text-gray-500">
        <Icon size="20" name="ph:magnifying-glass" /> Search
      </button>
      <NuxtLink to="/create" class="btn text-xs text-gray-500">
        <Icon size="20" name="ph:plus-circle" /> Create
      </NuxtLink>
      <!-- Menu used to change topics and country pref -->
      <HMenu class="relative" as="div">
        <HMenuButton class="btn text-xs text-gray-500">
          <Icon size="20" name="heroicons:adjustments-horizontal" /> Filters
        </HMenuButton>

        <TransitionSlide>
          <HMenuItems
            class="absolute right-0 mt-1 min-w-[180px] space-y-1 rounded-md border border-gray-100 bg-white p-1 shadow-lg dark:border-transparent dark:bg-gray-900"
          >
            <HMenuItem v-slot="{ active }">
              <button
                @click="changeData(DATA_TYPE.COUNTRY)"
                :class="
                  active
                    ? 'bg-primary text-white'
                    : 'text-gray-500 dark:text-gray-400'
                "
                class="flex w-full items-center gap-3 rounded-md p-2 text-xs transition-colors"
              >
                <Icon size="16" name="ph:flag" />
                <span>Select countries</span>
              </button>
            </HMenuItem>
            <HMenuItem v-slot="{ active }">
              <button
                @click="changeData(DATA_TYPE.TOPICS)"
                :class="active ? 'bg-primary text-white' : 'text-gray-500'"
                class="flex w-full items-center gap-3 rounded-md p-2 text-xs transition-colors"
              >
                <Icon size="16" name="ph:squares-four" />
                <span>Select topics</span>
              </button>
            </HMenuItem>
          </HMenuItems>
        </TransitionSlide>
      </HMenu>
      <button @click="toggleDark()" class="btn p-3 text-gray-500">
        <Icon size="18" name="ph:sun" />
      </button>
    </div>
  </header>
  <!-- Search modal -->
  <Modal
    v-model="search"
    panel-class="md:min-w-[440px] w-[340px] rounded-lg shadow-lg bg-white dark:bg-gray-900"
  >
    <div>
      <div class="relative">
        <span class="absolute top-1/2 left-3 -translate-y-1/2">
          <Icon
            class="opacity-40"
            name="heroicons:magnifying-glass"
            size="20"
          />
        </span>
        <input
          v-model="searchValue"
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          class="block w-full border-none bg-transparent py-3 px-4 pl-10 focus:ring-0"
        />
      </div>
      <div
        v-if="results && results.length > 0"
        class="border p-3 dark:border-gray-800"
      >
        <p class="mb-5 text-sm font-medium opacity-60">Results</p>
        <ul>
          <template v-for="(s, i) in results" :key="i">
            <NuxtLink
              @click="
                searchValue = '';
                search = false;
              "
              :to="`/entity/${s.id}`"
            >
              <li
                class="mb-1 flex items-center gap-5 rounded-lg p-2 text-sm transition hover:bg-gray-100 hover:dark:bg-gray-600"
              >
                <img
                  :src="s.media[0].secure_url"
                  :alt="s.title"
                  class="h-10 w-10 rounded-full object-cover"
                />
                <span>{{ s.title }}</span>
              </li>
            </NuxtLink>
          </template>
        </ul>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import { Entity } from "@prisma/client";

const { toggleDark } = useTheme();

enum DATA_TYPE {
  COUNTRY = "country",
  TOPICS = "topics",
}

const search = useState(() => false);
const searchValue = useState(() => "");

const results = ref<Entity[]>([]);

const changeData = async (type: DATA_TYPE) => {
  if (type == DATA_TYPE.COUNTRY) {
    // remove countryset from storage and reidrect to page
    localStorage.removeItem("countrySet");
    await navigateTo("/countries");
  }
  if (type === DATA_TYPE.TOPICS) {
    // remove topicsSet from storage and reidrect to page
    localStorage.removeItem("topicsSet");
    await navigateTo("/topics");
  }
};

watchEffect(async () => {
  if (searchValue.value.length > 1) {
    // fetch results
    const d = await $fetch<Entity[]>("/api/entities/search", {
      query: {
        search: searchValue.value,
      },
    });
    results.value = d;
  }
});

const { ctrl_k, cmd_k, ctrl_slash, cmd_slash } = useMagicKeys();

watchEffect(() => {
  if (cmd_k.value || ctrl_k.value || ctrl_slash.value || cmd_slash.value) {
    search.value = !search.value;
  }
});

const suggestions = [
  { icon: "logos:nuxt-icon", text: "Nuxt" },
  { icon: "logos:vue", text: "Vue" },
  { icon: "logos:tailwindcss-icon", text: "Tailwind" },
  { icon: "logos:vuetifyjs", text: "Vuetify" },
];

const settings = [
  { icon: "ph:gear", text: "Settings" },
  { icon: "ph:user", text: "Profile" },
  { icon: "ph:arrow-square-out-fill", text: "Logout" },
];
</script>
