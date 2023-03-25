<template>
  <section>
    <h1 class="eitem mb-5 text-2xl font-semibold">Add details</h1>
    <p class="eitem mb-10 leading-8 text-gray-600 dark:text-gray-400">
      Enter the details below
    </p>

    <form>
      <div>
        <FormSelect
          :items="useTypes().value"
          name="type"
          id="type"
          label="Select type"
          rules="required"
          v-model="entity.type"
        />
      </div>
      <div v-if="entity.type == 'Experience'">
        <FormInput
          id="location"
          name="location"
          label="Location of experience"
          rules="required|min:3|max:100"
          v-model="entity.location"
        />
      </div>
      <div>
        <FormInput
          name="title"
          id="title"
          label="Title"
          rules="required|min:3|max:100"
          v-model="entity.title"
        />
      </div>
      <div v-if="entity.type != 'Information'">
        <FormInput
          name="price"
          id="price"
          type="number"
          label="Price"
          v-model.number="entity.price"
        />
      </div>
      <div v-if="entity.type != 'Information'">
        <FormTextarea
          name="description"
          id="description"
          label="Description"
          v-model.number="entity.description"
        />
      </div>
      <div v-if="entity.type == 'Information'">
        <FormInput
          name="tags"
          placeholder="Eg: Beach, Nature"
          label="Tags"
          hint="Separate tags with a comma"
          v-model.number="entity.tags"
        />
      </div>
      <div class="mt-7">
        <input
          multiple
          accept="image/*, video/*, audio/*"
          @click="clearInput"
          @change="uploadFile"
          type="file"
          hidden
          ref="hiddenInput"
        />
        <div
          @click="hiddenInput.click()"
          class="flex min-h-[80px] w-full cursor-pointer items-center justify-center rounded-lg border border-dashed border-gray-300 dark:border-gray-500"
        >
          <div class="my-5 text-center">
            <div
              class="inline-flex items-center justify-center rounded-full bg-gray-100 p-4 dark:bg-gray-800"
            >
              <Icon class="text-gray-600 dark:text-gray-400" name="ph:upload" />
            </div>
            <p class="mt-5 text-sm font-medium">
              Click to upload media for this entity
            </p>
            <p class="mt-1 text-sm text-gray-500">Max of 5</p>
          </div>
        </div>
        <ul class="mt-5" v-if="entity.media">
          <li
            v-for="(m, i) in entity.media"
            class="flex items-center justify-between p-2"
          >
            <div class="flex grow items-center gap-x-5">
              <Icon class="text-gray-500" :name="getIcon(m.type)" />
              <span class="capitalize">{{ m.name }}</span>
            </div>
            <button
              @click="entity.media?.splice(i, 1)"
              type="button"
              class="btn-icon text-gray-500 hover:text-red-500"
            >
              <Icon size="20" name="ph:trash" />
            </button>
          </li>
        </ul>
      </div>

      <div class="mt-7" v-if="entity.type != 'Information'">
        <FormInput
          name="whatsapp"
          label="WhatsApp number"
          type="number"
          rules="required|min:10|max:12"
          v-model="entity.whatsapp"
        />
      </div>

      <div class="mt-7" v-if="entity.type == 'Information'">
        <label class="label" for="des">Description</label>
        <ClientOnly>
          <QuillEditor
            contentType="html"
            v-model:content="entity.description"
            theme="snow"
          />
        </ClientOnly>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const entity = useEntity();

const hiddenInput = ref();

const clearInput = () => {
  hiddenInput.value.value = "";
};

const uploadFile = (e: any) => {
  const files = e.target.files;
  if (!files) return;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    // check if entity media is defined & is an array
    if (entity.value.media && Array.isArray(entity.value.media)) {
      // push the result to the entity media array
      entity.value.media.push(file);
    }
    // if entity media is not defined or is not an array
    else {
      // create a new array with the result
      entity.value.media = [file];
    }
  }
};

const getIcon = (type: string) => {
  if (type.includes("image")) return "ph:image";
  if (type.includes("video")) return "ph:video";
  if (type.includes("audio")) return "ph:music-note";
  return "ph:file";
};
</script>

<style scoped></style>
