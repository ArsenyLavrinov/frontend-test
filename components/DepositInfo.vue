<template>
  <section
    class="ml-0.5 mr-0.5 mt-4 bg-card-bg-color rounded-[30px] p-5 space-y-4"
  >
    <div class="flex flex-col gap-2">
      <p class="body-text">Депозит:</p>
      <div class="flex flex-col gap1">
        <h2 class="heading-2">42530 ₽</h2>
        <p class="body-text-small">~ $500</p>
      </div>
    </div>

    <hr class="h-px w-[327px]" />

    <div class="flex flex-col gap-2">
      <p class="body-text">Доступны мне:</p>
      <div class="flex flex-col gap1">
        <h2 class="heading-2 text-fiat-green">21 265 ₽</h2>
        <p class="body-text-small">~ $500</p>
      </div>
    </div>
    <div class="flex flex-row gap-[5px]">
      <NuxtLink to="/deposit" class="w-full">
        <ActionButton :action="null" class="rounded-[20px]"
          ><p>Пополнить</p>
          <img :src="addIcon" class="w-[20px] h-[20px]" alt="" />
        </ActionButton>
      </NuxtLink>
      <NuxtLink to="/withdraw" class="w-full">
        <ActionButton
          :action="null"
          :text-color="'text-action-color'"
          :color="'bg-secondary-btn-color'"
          class="rounded-[20px]"
          ><p>Вывести</p>
          <img :src="sendIcon" class="w-[20px] h-[20px]" alt="" />
        </ActionButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import addIcon from "~/assets/svgs/Download.svg";
import sendIcon from "~/assets/svgs/send.svg";
</script>

<style lang="scss" scoped></style>
