<template>
  <div
    class="w-[56px] h-[56px] bg-white flex flex-col justify-center items-center rounded-[40px] cursor-pointer"
  >
    <img :src="path" alt="menu" />
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "bg-primary-btn-color",
  },
  path: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
