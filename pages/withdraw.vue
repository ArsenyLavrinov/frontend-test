<template>
  <div>
    <NuxtLayout>
      <template #header>
        <HeaderWithArrowBack
          path="/"
          text="Вывод средств"
        ></HeaderWithArrowBack>
      </template>

      <WithdrawInfo></WithdrawInfo>

      <WithdrawComponent></WithdrawComponent>
      <NuxtLink to="/wdrequest">
        <ActionButton
          class="rounded-[50px] absolute bottom-[20px] w-[335px] content-container"
        >
          <p class="body-text text-white">Вывод средств</p>
        </ActionButton>
      </NuxtLink>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ pageTransition: { name: "page" } });
</script>

<style scoped></style>
