<template>
  <section class="container-col-gap-8 gap-[18px]">
    <!-- /// -->
    <div class="flex flex-row justify-between items-center">
      <div class="container-col-gap-8">
        <p class="body-text">Дата и время операции:</p>

        <div class="flex flex-row gap-2 items-center">
          <img
            src="~/assets/svgs/depositIcon.svg"
            class="h-[22px] w-[22px]"
            alt=""
          />
          <p class="body-text text-heading">
            {{
              new Date(Date.parse(props.date))
                .toLocaleDateString("ru-RU", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .replace(",", " ")
            }}
          </p>
        </div>
      </div>
      <div class="h-full">
        <NuxtLink :to="`/transactions/${props.operationId}/detail`">
          <img src="~/assets/svgs/Tx.svg" class="h-[24px] w-[24px]" alt="" />
        </NuxtLink>
      </div>
    </div>

    <!-- /// -->
    <div class="container-col-gap-8">
      <div>
        <p class="body-text">Тип операции:</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img
          src="~/assets/svgs/depositIcon.svg"
          class="h-[22px] w-[22px]"
          alt=""
        />
        <p class="body-text text-heading">{{ props.type }}</p>
      </div>
    </div>
    <!-- /// -->
    <div class="container-col-gap-8">
      <div>
        <p class="body-text">Реквизиты:</p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <img
          :src="'/icons/' + props.bankLogo"
          class="h-[22px] w-[22px]"
          alt=""
        />
        <p class="body-text text-heading">
          {{ props.fromBank }}
        </p>
      </div>
      <p class="body-text text-heading">{{ props.from }}</p>
    </div>
    <div class="container-col-gap-8">
      <p class="body-text">Сумма:</p>

      <p class="body-text text-heading">{{ props.sum.toLocaleString() }} ₽</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  operationId: {
    type: Number,
    required: true,
    default: 0,
  },
  sum: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    required: true,
    default: "",
  },
  type: {
    default: "Поступление",
    type: String,
    required: true,
  },
  from: {
    default: "Откуда придет",
    type: String,
    required: true,
  },
  fromBank: {
    default: "Откуда придет банк",
    type: String,
    required: true,
  },

  bankLogo: {
    default: "tinkoff.png",
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
