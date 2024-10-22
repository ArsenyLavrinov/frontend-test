<template>
  <section
    class="flex flex-row bg-card-bg-color rounded-[20px] px-5 py-2.5 justify-between items-center"
  >
    <div class="flex flex-row gap-2 items-center">
      <NuxtImg
        :src="'icons/' + props?.bankLogo"
        class="w-8 h-8"
        alt=""
        loading="lazy"
      />
      <div class="flex flex-col">
        <p class="body-text text-[#252525]">{{ props.from }}</p>
        <h1 class="caption-text">{{ props.bankName }}</h1>
      </div>
    </div>
    <div class="flex flex-col items-end justify-center">
      <p class="body-text-small text-[#252525]" v-if:="props.amount">
        {{ props.amount.toLocaleString() }} ₽
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  bankLogo: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: false,
    default: 0,
  },
});
</script>
