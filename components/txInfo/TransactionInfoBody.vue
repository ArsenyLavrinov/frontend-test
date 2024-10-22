<template>
  <section class="flex flex-col">
    <div class="flex flex-col gap-[3px]">
      <h1 class="heading-3">Придет на:</h1>
      <p class="body-text-small text-[#979797]">
        куда будет осуществлен перевод
      </p>
    </div>
    <div class="flex flex-col mt-[18px]">
      <TxInfoTransactionInfoCard
        :amount="props.amount"
        :bankLogo="props.bankLogo"
        :bank-name="props.bankName"
        :from="props.to"
      ></TxInfoTransactionInfoCard>
    </div>
    <div class="flex flex-col gap-[8px] mt-[24px]">
      <p class="body-text-small text-[#979797]">Откуда придет</p>
      <TxInfoTransactionInfoCard
        :bankLogo="props.bankLogo"
        :bank-name="props.bankName"
        :from="props.from"
      ></TxInfoTransactionInfoCard>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  through: {
    type: String,
    default: "ERROR",
  },
  from: {
    type: String,
    default: "ERROR",
  },
  bankName: {
    type: String,
    default: "ERROR",
  },

  amount: {
    type: Number,
    default: 0,
  },
  bankLogo: {
    type: String,
    default: "ERROR",
  },

  to: {
    type: String,
    default: "ERROR",
  },
});
</script>

<style scoped></style>
