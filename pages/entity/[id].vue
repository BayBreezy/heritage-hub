<template>
  <main class="pb-10">
    <Nav />

    <section class="mx-auto max-w-xl px-5 pb-5 pt-7 md:pt-10">
      <div class="flex items-center justify-between">
        <h1 class="item text-xl font-semibold">{{ entity?.title }}</h1>
        <HMenu v-if="isSupported" class="relative z-20" as="div">
          <HMenuButton class="btn-icon item">
            <Icon size="20" name="ph:dots-three-outline-vertical-fill" />
          </HMenuButton>
          <TransitionSlide>
            <HMenuItems
              class="absolute right-0 mt-1 min-w-[130px] space-y-1 rounded-md border border-gray-100 bg-white p-1 shadow-lg dark:border-transparent dark:bg-gray-900"
            >
              <HMenuItem v-slot="{ active }">
                <button
                  @click="sharePage"
                  :class="
                    active
                      ? 'bg-primary text-white'
                      : 'text-gray-500 dark:text-gray-400'
                  "
                  class="flex w-full items-center gap-5 rounded-md p-2 text-sm transition-colors"
                >
                  <Icon size="18" name="ph:share" />
                  <span>Share</span>
                </button>
              </HMenuItem>
            </HMenuItems>
          </TransitionSlide>
        </HMenu>
      </div>
      <p v-if="entity?.location" class="item text-gray-500">
        {{ entity.location }}
      </p>

      <div class="item mt-10">
        <Swiper :space-between="15" :slides-per-view="1.1" grab-cursor>
          <SwiperSlide
            v-for="e in entity?.media"
            tag="div"
            class="overflow-hidden rounded-lg ring-1 ring-gray-300 dark:ring-gray-900"
          >
            <img
              v-if="e.resource_type == 'image'"
              :src="e.secure_url"
              :alt="entity?.title"
              height="300"
              class="h-[300px] w-full rounded-xl object-cover shadow"
            />
            <ClientOnly>
              <vue-plyr class="min-h-[300px]" v-if="e.resource_type == 'video'">
                <video class="h-full w-full" controls height="300">
                  <source class="h-full w-full" :src="e.secure_url" />
                </video>
              </vue-plyr>
            </ClientOnly>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="mt-7">
        <p v-if="entity?.price" class="item mb-3 font-semibold">
          {{ useCurrency(entity.price) }}
        </p>
        <ClientOnly>
          <article class="item prose prose-gray dark:prose-invert">
            <p v-html="entity.description" v-if="entity?.description"></p>
          </article>
        </ClientOnly>
      </div>
      <div v-if="entity?.type == 'Product'" class="item mt-7">
        <button @click="startWhatsapp()" class="btn btn-primary">
          Buy now
        </button>
      </div>
      <div v-if="entity?.type == 'Experience'" class="item mt-7">
        <button @click="startWhatsapp()" class="btn btn-primary">
          Book now
        </button>
      </div>

      <div class="mt-10">
        <h3 class="mb-7 text-xl font-semibold">Related offerings</h3>
        <Swiper
          :space-between="10"
          :slides-per-view="1.3"
          grab-cursor
          :breakpoints="breakpoints"
        >
          <SwiperSlide v-for="p in products" tag="div">
            <NuxtLink to="/entity/123">
              <div
                :style="`background-image: url('${p.media[0].secure_url}')`"
                class="item relative h-[250px] w-full overflow-hidden rounded-xl bg-cover bg-center"
              >
                <div
                  class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 px-2.5 pb-2"
                >
                  <div>
                    <h3 class="text-lg text-white">{{ p.title }}</h3>
                    <p class="text-sm text-white/60">
                      {{ useCurrency(p.price) }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
const route = useRoute();
const { data, error } = await useAsyncData(() =>
  $fetch(`/api/entities/index/${route.params?.id}`)
);

const entity = data.value?.entity;
const products = data.value?.products;

if (error.value) {
  useToast().error("Unable to load this entity");
  await navigateTo("/");
}

const { share, isSupported } = useShare();
// breakpoints for related offerings
const breakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
};

// animation on mount
onMounted(async () => {
  gsap.from(".item", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
  });
});

// function used to share page
const sharePage = () => {
  if (isSupported) {
    share({
      title: `Check out ${entity.value?.title}`,
      text: entity.value?.description || "Check out this page",
      url: window.location.href,
    });
  } else {
    useToast().error("Share not supported");
  }
};

// function used to start whatsapp chat
const startWhatsapp = () => {
  window.open(
    `https://wa.me/${entity?.value?.whatsapp}?text=Hi, I'm interested in ${entity?.value?.title}`,
    "_blank"
  );
};
</script>

<style scoped></style>
