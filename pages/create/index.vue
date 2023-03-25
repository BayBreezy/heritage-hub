<template>
  <main>
    <Nav />
    <div class="mx-auto max-w-xl px-5 pt-10 pb-5">
      <TransitionFade group mode="out-in">
        <div v-if="step == 1" key="topics">
          <CreateCountries />
        </div>
        <div v-if="step == 2" key="country">
          <CreateTopics />
        </div>
        <div v-if="step == 3" key="entity">
          <CreateEntity />
        </div>
      </TransitionFade>

      <div class="titem mt-10 flex items-center gap-x-3">
        <button
          v-if="step != 1"
          @click="goNext(step - 1)"
          class="btn btn-outline"
        >
          Prev
        </button>
        <button
          v-if="step != 3"
          @click="goNext(step + 1)"
          class="btn btn-primary"
        >
          Next
        </button>
        <button v-if="step == 3" @click="create" class="btn btn-primary">
          Create
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
useHead({ title: "Create" });

// var used to hold the global state fo the form
const entity = useEntity();
const countries = useState<any[]>("creationCountries");
const topics = useState<any[]>("creationTopics");

// load topics and countries from api
await useAsyncData(() => useLoadCountries());
await useAsyncData(() => useLoadTopics());

const step = ref(1);

const goNext = async (v: number) => {
  step.value = v;
};

const create = async () => {
  const loader = useToast().loading("Creating entity...");
  try {
    await EntitySchema.validate(entity.value);
    if (!entity.value.media)
      return useToast().error("Add atleast one image or video");
    let vals = [];

    for (let i = 0; i < entity.value.media.length; i++) {
      const media = entity.value.media[i];
      const { execute } = useBase64(media);
      const res = await execute();
      vals.push(res);
    }

    const res = await $fetch("/api/entities", {
      method: "POST",
      body: {
        ...entity.value,
        countries: countries.value,
        topics: topics.value,
        media: vals,
      },
    });
    await navigateTo(`/entity/${res.id}`);
    useToast().success("Entity created!");
  } catch (error: any) {
    console.log(error);
    useToast().error(error.message);
  } finally {
    useToast().remove(loader);
  }
};

onMounted(async () => {
  gsap.from(".titem", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });
});
</script>
