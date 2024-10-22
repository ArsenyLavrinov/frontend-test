<template>
  <div>
    <NuxtLayout>
      <template #header>
        <HeaderWithArrowBack
          :breakWords="false"
          path="/transactions"
          :text="'Операция #' + operationId"
        ></HeaderWithArrowBack>
      </template>
      <section>
        <WithdrawRequest
          class="mt-[50px]"
          description=" "
          :heading="
            selectedTransacion.success
              ? 'Пополнение зачисленно'
              : 'Пополнение не выполнено'
          "
          :success="selectedTransacion.success"
        >
        </WithdrawRequest>
      </section>
      <div class="content-container mt-4">
        <TransactionsDetails
          :operationId="selectedTransacion.id"
          :date="selectedTransacion.date"
          :from="selectedTransacion.from"
          :fromBank="selectedTransacion.fromBank"
          :type="selectedTransacion.type"
          :sum="selectedTransacion.sum"
          :bankLogo="selectedTransacion.bankLogo"
          :amount="selectedTransacion.amount"
        >
        </TransactionsDetails>
      </div>
      <ConfirmedActionButton
        primaryBtnText="Подать аппеляцию"
        primaryTo="/chat"
        secondaryBtnText="Написать в поддержку"
        secondaryTo="/chat"
      >
      </ConfirmedActionButton>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "page",
  },
});

const txHistory = useTransactionHistoryStore();
const { selectedTransacion } = storeToRefs(txHistory);
// onMounted(() => {
//   if (!selectedTransacion.value?.id) {
//     navigateTo("/transactions");
//   }
// });
onMounted(() => {
  if (!selectedTransacion.value?.id) {
    navigateTo("/transactions");
  }
});
const route = useRoute();
const operationId = route.params.id;
</script>

<style scoped></style>
