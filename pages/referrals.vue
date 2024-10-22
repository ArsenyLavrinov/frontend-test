<template>
  <div>
    <NuxtLayout>
      <template #header>
        <HeaderWithArrowBack path="/profile" text="Реферальная программа" />
      </template>

      <ReferralProgram></ReferralProgram>
      <MyRefferals></MyRefferals>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "page",
  },
});
</script>

<style lang="scss" scoped></style>
