<template>
  <div
    :class="
      'bg-card-bg-color ' +
      props.padding +
      ' flex flex-row items-center ' +
      props.rounded
    "
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  rounded: {
    type: String,
    default: " rounded-[20px]",
  },
  padding: {
    type: String,
    default: "p-5",
  },
});
</script>

<style lang="scss" scoped></style>
