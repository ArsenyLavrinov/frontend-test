<template>
  <section class="">
    <div class="flex flex-row container-stretched">
      <div class="flex flex-col gap-2 items-start">
        <p class="caption-text text-[#252525]">Сумма</p>
        <p class="heading-2 leading-[30px]">
          {{ props.amount.toLocaleString() }} ₽
        </p>
      </div>
      <div class="flex flex-col gap-2 items-start">
        <div>
          <p class="body-text">Тип операции</p>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <img
            src="~/assets/svgs/depositIcon.svg"
            class="h-[22px] w-[22px]"
            alt=""
          />
          <p class="body-text text-[#252525]">{{ props.type }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  amount: {
    type: Number,
    default: "0",
  },
  type: {
    type: String,
    default: "Поступление",
  },
});
</script>

<style scoped></style>
