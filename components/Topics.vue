<template>
  <section class="mx-auto max-w-xl px-5 pt-20 pb-5">
    <h1 class="item mb-5 text-2xl font-semibold">Select your topics</h1>
    <p class="item mb-10 leading-8 text-gray-600 dark:text-gray-400">
      Choose the topics that you want to see information about. This can be
      changed later.
    </p>

    <label for="all" class="item flex cursor-pointer items-center gap-x-3">
      <input @change="toggleSelect" id="all" type="checkbox" />
      <span>Select all</span>
    </label>
    <div class="mt-10">
      <ul class="flex flex-wrap items-center gap-x-7 gap-y-10">
        <li v-for="c in useTopics().value" :key="c.name">
          <label
            :class="
              topics.includes(c)
                ? 'bg-green-500/20 text-green-600 dark:bg-green-600/10 dark:text-green-400'
                : 'text-gray-600 dark:text-gray-400'
            "
            :for="c.name"
            class="item flex cursor-pointer items-center gap-x-3 rounded-full px-3 py-2 transition-colors hover:dark:bg-gray-800"
          >
            <Icon size="20" :name="c.icon!" />

            <input
              v-model="topics"
              :value="c"
              :id="c.name"
              type="checkbox"
              class="hidden"
            />
            <span class="">{{ c.name }}</span>
          </label>
        </li>
      </ul>
      <div class="item mt-10">
        <button @click="goNext" class="btn btn-primary">Continue</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const topics = useState<any[]>(() => []);

const toggleSelect = (e: any) => {
  const checked = e.target.checked;
  if (checked) {
    topics.value = useTopics().value;
  } else {
    topics.value = [];
  }
};

const goNext = async () => {
  // set items in local storage
  useStoreTopics(topics.value);
  await navigateTo("/");
};
</script>
