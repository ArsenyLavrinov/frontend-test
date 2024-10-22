<template>
  <div>
    <NuxtLayout class="h-[100vh] w-[100vw]">
      <template #header>
        <HeaderWithArrowBack
          :path="'/confirm/' + Number(operationId)"
          :text="'Операция ' + Number(operationId)"
          :breakWords="false"
        ></HeaderWithArrowBack>
      </template>
      <div class="flex flex-col gap-[54px] content-container">
        <section>
          <WithdrawRequest
            class="mt-[52px]"
            description="Вы подтвердили получение средств"
            heading="Платеж подтвержден"
          ></WithdrawRequest>
        </section>
        <section class="flex flex-col gap-[24px]">
          <div class="flex flex-col gap-2">
            <p class="body-text">Дата и время операции</p>
            <p class="body-text text-[#252525]">
              {{ selectedTransacion?.dateTransaction }}
            </p>
          </div>
          <div class="flex flex-col gap-2">
            <p class="body-text">Ваши реквизиты</p>
            <div class="flex flex-col gap-1">
              <p class="body-text text-[#252525]">
                {{ selectedTransacion?.from }}
              </p>
              <p class="body-text">
                {{ selectedTransacion?.bank }}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="body-text">Сумма</p>
            <p class="body-text text-[#252525]">
              {{ selectedTransacion?.amount?.toLocaleString("ru-RU") ?? 0 }} ₽
            </p>
          </div>
        </section>
      </div>
      <ConfirmedActionButton> </ConfirmedActionButton>
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

const route = useRoute();
const operationId = route.params.id;
const transactionStore = useTransactionStore();
const { selectedTransacion } = storeToRefs(transactionStore);

onBeforeMount(() => {
  if (!selectedTransacion.value?.id) {
    navigateTo("/transactions");
  }
});
</script>

<style scoped></style>
