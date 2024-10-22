<template>
  <section>
    <h1 class="body-text mt-6 content-container">Мои счета</h1>

    <section class="flex flex-col gap-[7px] mr-1 ml-1 mt-[14px]">
      <AccountFinanceComponent
        v-for="item in myAccounts"
        :key="item.accountNumber"
        :accountInfo="item"
      >
      </AccountFinanceComponent>

      <AddAccountFinanceInfo class="h-[58px]"></AddAccountFinanceInfo>
    </section>
  </section>
</template>

<script setup lang="ts">
import { data } from "~/constants/data";
import type { BankAccount } from "~/types";

const { myAccounts } = data;
</script>

<style lang="scss" scoped></style>
