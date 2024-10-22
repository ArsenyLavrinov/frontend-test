<template>
  <Header>
    <div class="flex flex-row items-center justify-center relative">
      <div
        class="absolute left-0 bg-card-bg-color w-[52px] h-[52px] flex flex-row justify-center items-center rounded-[50px]"
      >
        <NuxtLink :to="props.path">
          <img src="~/assets/svgs/exitLeft.svg" alt="" />
        </NuxtLink>
      </div>

      <h1
        :class="
          'heading-3 text-center self-center ' +
          (props.breakWords ? 'max-w-[150px] ' : '')
        "
      >
        {{ props.text }}
      </h1>
    </div>
  </Header>
</template>

<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
  },
  text: {
    type: String,
  },
  breakWords: {
    type: Boolean,
    default: true,
  },
});
</script>
