<template>
  <div>
    <NuxtLayout class="w-[100%] h-[100%]">
      <template #header>
        <Header>
          <p class="heading-1">Главная</p>
        </Header>
      </template>
      <div class="flex flex-col gap-3 content-container">
        <section
          class="flex flex-col p-5 hero-bg gap-[31px] mt-[21px] rounded-[30px]"
        >
          <p class="body-text text-white">Суммарная сумма поступлений</p>
          <p class="heading-2 text-white leading-[30px]">
            {{ data.accountInfo.sumDeposit.toLocaleString() }} ₽
          </p>
        </section>
        <CardComponent padding="p-4" class="rounded-[30px]">
          <div class="container-stretched">
            <p class="caption-text text-[#252525]">Присылать уведомления</p>
            <img src="~/assets/svgs/sendNotification.svg" alt="" />
          </div>
        </CardComponent>
        <div v-for="transaction in data.pendingTransactions">
          <TransactionInfo
            :key="transaction.id"
            :operation-id="transaction.id"
            :amount="transaction.amount.toLocaleString() + ' ₽'"
            :bank="transaction.bank"
            :through="transaction.through"
            :type="transaction.type"
          >
          </TransactionInfo>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "account-layout",
  pageTransition: {
    name: "page",
  },
  middleware: "auth",
});

import { data } from "~/constants/data";
</script>
