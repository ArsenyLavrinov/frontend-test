<template>
    <input
    v-model="value"
      :class="'bg-card-bg-color p-5 flex flex-row items-center focus:ring-1 focus:outline-none focus:ring-action-color ' + props.rounded"
    :placeholder="props.placeholder"
      >
      <slot></slot>
    </input>
  </template>
  
  <script setup>
  const value = ref("");
  const props = defineProps({
    rounded: {
      type: String,
      default: " rounded-[20px]",
    },
    placeholder: {
      type: String,
      default: "",
    }
  });
  </script>
  
  <style lang="scss" scoped></style>
  