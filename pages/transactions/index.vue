<template>
  <div>
    <NuxtLayout>
      <template #header>
        <Header>
          <p class="heading-1">История заданий</p>
        </Header>
      </template>
      <div class="flex flex-col gap-2">
        <section class="content-container mt-[32px]">
          <div
            class="flex flex-row w-full justify-between bg-BGVeryLightGrey p-[3px] rounded-[15px] last:px-2 text-center"
          >
            <p
              :class="[
                'caption-text px-4 py-2',
                selected === 'day' ? 'bg-white rounded-[13px] ' : '',
              ]"
              @click="selectPeriod('day')"
            >
              За день
            </p>

            <p
              :class="[
                'caption-text px-4 py-2',
                selected === 'month' ? 'bg-white rounded-[13px] ' : '',
              ]"
              @click="selectPeriod('month')"
            >
              За месяц
            </p>
            <p
              :class="[
                'caption-text py-2',
                selected === 'all' ? 'bg-white rounded-[13px] ' : '',
              ]"
              @click="selectPeriod('all')"
            >
              За все время
            </p>
          </div>
        </section>
        <div class="mx-[4px]">
          <TransactionsInfo :userInfo="userInfo"></TransactionsInfo>
        </div>

        <section
          v-for="tx in transactionHistory.history"
          class="px-[22px] py-2.5 bg-card-bg-color flex flex-col mx-[4px] rounded-[30px]"
        >
          <NuxtLink
            :to="`/transactions/${tx.id}`"
            @click="selectTransaction(tx)"
          >
            <div class="flex flex-col gap-1">
              <div class="container-stretched justify-between">
                <p class="caption-text text-heading">
                  {{ tx.type + " #" + tx.id }}
                </p>
                <p class="caption-text text-heading">
                  {{ new Date(tx.date).toLocaleString() }}
                </p>
              </div>
              <div class="container-stretched">
                <p class="body-text-small text-placeholder-text-color">
                  {{ tx.sum.toLocaleString("ru-RU") }} ₽
                </p>
                <p
                  class="body-text-small"
                  :class="
                    tx.type === 'Вывод' ? 'text-warn-color' : 'text-fiat-green'
                  "
                >
                  {{ tx.amount.toLocaleString("ru-RU") }} ₽
                </p>
              </div>
            </div>
          </NuxtLink>
        </section>
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
});

import { data } from "~/constants/data";
const { transactionHistory } = data;
const { userInfo } = transactionHistory;

import { ref } from "vue";
import type { ITransactionInfoHistory } from "~/types";
const txHistory = useTransactionHistoryStore();

const selectTransaction = (tx: ITransactionInfoHistory) => {
  txHistory.setSelectedTransacion(tx);
};
// Состояние активного селектора
const selected = ref("day");

// Функция для выбора периода
const selectPeriod = (period: string) => {
  selected.value = period;
};
</script>
