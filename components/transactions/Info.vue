<template>
  <CardComponent
    padding="p-4"
    rounded="rounded-[30px]"
    class="bg-card-bg-color"
  >
    <div class="flex flex-col gap-2.5">
      <h1 class="body-text text-placeholder-text-color">Суммарно пополнений</h1>
      <div class="flex flex-col gap-1">
        <div class="heading-2 text-heading flex flex-row items-center gap-1">
          <p class="heading-2 text-placeholder-text-color">$</p>
          {{ userInfo.sumDepositDollar.toLocaleString("en-US") }}
        </div>
        <div>
          <p class="caption-text leading-[17px]">
            ≈
            {{ userInfo.sumDeposit.toLocaleString("ru-RU") }} ₽
          </p>
        </div>
      </div>
    </div>
  </CardComponent>
</template>

<script setup>
const porps = defineProps(["userInfo"]);
</script>
