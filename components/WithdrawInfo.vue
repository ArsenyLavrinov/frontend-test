<template>
  <section class="content-container mt-8 h-full">
    <div>
      <div class="flex flex-col">
        <h1 class="body-text">Доступны для вывода:</h1>
        <div class="flex flex-row mt-2 gap-2 heading-1 text-action-color">
          <p>{{ accountInfo.avaliableWd.toLocaleString() }} ₽</p>
          <p>~ ${{ accountInfo.avaliadbleWdDollar }}</p>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <h1 class="body-text">На удержании (заблокированы):</h1>

        <div class="flex flex-row mt-2 gap-2 items-center">
          <p class="heading-3 text-[#BDBDBD]">
            {{ accountInfo.freezed.toLocaleString() }} ₽
          </p>
          <p class="body-text-small text-[#BDBDBD]">
            ~ ${{ accountInfo.avaliadbleWdDollar }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { data } from "~/constants/data";
const { accountInfo } = data;
</script>

<style scoped></style>
