<template>
  <section>
    <h1 class="titem mb-5 text-2xl font-semibold">Choose countries</h1>
    <p class="titem mb-10 leading-8 text-gray-600 dark:text-gray-400">
      Choose the countries that you want to link to this creation.
    </p>

    <label for="all" class="titem flex cursor-pointer items-center gap-x-3">
      <input @change="toggleSelect" id="all" type="checkbox" />
      <span>Select all</span>
    </label>
    <div class="mt-10">
      <ul class="flex flex-wrap items-center gap-x-7 gap-y-10">
        <li v-for="c in useCountries().value" :key="c.name">
          <label
            :class="
              countries.includes(c)
                ? 'bg-green-500/20 text-green-600 dark:bg-green-600/10 dark:text-green-400'
                : ''
            "
            :for="c.name"
            class="titem flex cursor-pointer items-center gap-x-3 rounded-full px-3 py-2 transition-colors hover:dark:bg-gray-800"
          >
            <span class="overflow-hidden rounded-full">
              <Icon size="20" :name="c.icon!" />
            </span>
            <input
              v-model="countries"
              :value="c"
              :id="c.name"
              type="checkbox"
              class="hidden"
            />
            <span class="">{{ c.name }}</span>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const countries = useState<any[]>("creationCountries", () => []);

const toggleSelect = (e: any) => {
  const checked = e.target.checked;
  if (checked) {
    countries.value = useCountries().value;
  } else {
    countries.value = [];
  }
};
</script>
