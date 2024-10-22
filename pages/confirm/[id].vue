<template>
  <div>
    <NuxtLayout>
      <template #header>
        <HeaderWithArrowBack
          :breakWords="false"
          path="/"
          :text="'Операция ' + operationId"
        ></HeaderWithArrowBack>
      </template>
      <section class="content-container mt-[36px] flex flex-col gap-[35px]">
        <TxInfoTransactionInfoHeader
          :amount="txInfo.amount"
          :type="txInfo.type"
        ></TxInfoTransactionInfoHeader>
        <TxInfoTransactionInfoBody
          :bankLogo="txInfo.bankLogo"
          :bankName="txInfo.bank"
          :from="txInfo.from"
          :amount="txInfo.toAmount"
          :to="txInfo.to"
        >
        </TxInfoTransactionInfoBody>
        <div></div>
      </section>
      <TxInfoActionCard
        :transactionFinishTime="txInfo.finishTime"
        :transactionId="Number(operationId)"
      ></TxInfoActionCard>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "page",
  },
  validate: async (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === "string" && /^\d+$/.test(route.params.id);
  },
});

const route = useRoute();
const operationId = route.params.id;
import { data } from "~/constants/data";

const txInfo: any = data.transactionDetails[operationId];

const transactionStore = useTransactionStore();
(() => {
  transactionStore.setSelectedTransacion(txInfo);
})();
</script>

<style scoped></style>
