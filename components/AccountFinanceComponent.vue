<template>
  <section
    class="flex flex-row bg-card-bg-color rounded-[20px] px-5 py-5 justify-between items-center"
  >
    <div class="flex flex-row gap-2 items-center">
      <NuxtImg
        :src="'icons/' + props.accountInfo.bankLogo"
        class="w-8 h-8"
        alt=""
        loading="lazy"
      />
      <div class="flex flex-col">
        <h1 class="heading-4">{{ props.accountInfo.bankName }}</h1>
        <p class="body-text-small">
          *{{ props.accountInfo.accountNumber.slice(-4) }}
        </p>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <h2 class="heading-3">
        {{ props.accountInfo.balance.toLocaleString() }} ₽
      </h2>
      <p class="body-text-small">
        ~ ${{ props.accountInfo.dollarBalance.toLocaleString() }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { BankAccount } from "~/types";

const props = defineProps({
  accountInfo: {
    type: Object as PropType<BankAccount>,
    required: true,
  },
});
</script>
