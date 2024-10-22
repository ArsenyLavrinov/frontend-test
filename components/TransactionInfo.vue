<template>
  <section>
    <CardComponent rounded="rounded-[30px] " padding="p-4">
      <div class="flex flex-col gap-[23px] w-full">
        <div class="flex flex-col gap-[8px]">
          <p class="heading-3">Операция {{ props.operationId }}</p>
          <div class="flex flex-row gap-2 items-center">
            <img
              src="~/assets/svgs/depositIcon.svg"
              class="h-[22px] w-[22px]"
              alt=""
            />
            <p class="body-text">{{ props.type }}</p>
          </div>
        </div>

        <div>
          <div class="flex flex-col gap-2 items-start">
            <p class="caption-text text-[#252525]">Сумма</p>
            <p class="heading-2">{{ props.amount }}</p>
          </div>
        </div>
        <div class="flex flex-row gap-[14px] items-center">
          <NuxtImg
            :src="'icons/' + 'tinkoff.png'"
            class="w-8 h-8"
            alt=""
            loading="lazy"
          />
          <div class="flex flex-col">
            <h1 class="body-text-small">{{ props.through }}</h1>
            <p class="caption-text">
              {{ props.bank }}
            </p>
          </div>
        </div>
        <div>
          <NuxtLink :to="'/confirm/' + props.operationId" class="w-full">
            <ActionButton class="rounded-[50px]">
              <p
                class="text-[#FFFFFF] font-mont text-[16px] font-bold leading-[150%] text-center"
              >
                Принять
              </p>
            </ActionButton>
          </NuxtLink>
        </div>
      </div>
    </CardComponent>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  operationId: {
    type: String,
    default: "0",
  },
  amount: {
    type: String,
    default: "0",
  },
  type: {
    type: String,
    default: "Поступление",
  },
  bank: {
    type: String,
    default: "ERROR",
  },
  through: {
    type: String,
    default: "ERROR",
  },
});
</script>

<style scoped></style>
