<template>
  <section class="content-container mt-[22px]">
    <div class="flex flex-row justify-between">
      <h1 class="body-text">Пригласить</h1>
      <img src="~/assets/svgs/refIcon.svg" alt="" />
    </div>
    <div class="flex flex-row mt-3.5 gap-[6px]">
      <div
        v-for="letter in data.refferal.code.split('')"
        class="flex flex-row justify-center items-center bg-card-bg-color w-[62px] h-[58px] rounded-[15px] text-action-color font-bold leading-[150%] font-mont text-[22px]"
      >
        {{ letter }}
      </div>
      <!-- <div class="bg-card-bg-color py-[9px] px-[18px]">2</div> -->
    </div>
    <div class="mt-6 bg-card-bg-color max-w-full rounded-[15px]">
      <div class="flex flex-row justify-between p-[18px]">
        <h1 class="body-text-small text-action-color">
          {{ data.refferal.link.slice(0, 26) }}...
        </h1>
        <img src="~/assets/svgs/shareRefLink.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { data } from "~/constants/data";
</script>

<style scoped></style>
