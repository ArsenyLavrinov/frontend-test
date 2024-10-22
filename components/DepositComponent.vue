<template>
  <section class="content-container mt-[60px] flex flex-col">
    <div>
      <div>
        <h1 class="body-text">Валюта пополнения</h1>
      </div>
      <CardComponent class="mt-2" rounded="rounded-[15px]">
        <div class="container-stretched">
          <p class="body-text-small">Доллар США (USD)</p>
          <img src="~/assets/svgs/arrowDown.svg" alt="" />
        </div>
      </CardComponent>
      <div class="mt-5">
        <h1 class="body-text">Номер счета</h1>
      </div>
      <CardComponent class="mt-2" rounded="rounded-[15px]">
        <div class="container-stretched">
          <p class="body-text-small text-action-color">
            {{ data.accountInfo.accountNumber.slice(0, 26) }}...
          </p>
          <img src="~/assets/svgs/shareRefLink.svg" alt="" />
        </div>
      </CardComponent>
    </div>
    <NuxtLink to="/">
      <ActionButton class="rounded-[50px] absolute bottom-[20px] w-[335px]">
        <p class="body-text text-white">Вернуться к “Счета и депозит”</p>
      </ActionButton>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { data } from "~/constants/data";
</script>

<style scoped></style>
