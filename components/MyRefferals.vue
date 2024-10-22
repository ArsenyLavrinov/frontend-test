<template>
  <section class="content-container mt-[160px]">
    <div class="container-stretched">
      <h1 class="body-text">Мои рефералы</h1>
      <img src="~/assets/svgs/referral.svg" alt="" />
    </div>
    <div class="flex flex-col gap-2.5 mt-[12px]">
      <div
        class="bg-card-bg-color max-w-full p-5 flex flex-col gap-1 rounded-[20px]"
        v-for="referral in data.refferal.refferals"
      >
        <div class="body-text-small">
          {{ referral.email }}
        </div>
        <div class="caption-text">
          {{ referral.date }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { data } from "~/constants/data";
</script>

<style scoped></style>
