<template>
  <div>
    <NuxtLayout>
      <template #header>
        <Header>
          <p class="heading-1">Счета и депозиты</p>
        </Header>
      </template>
      <DepositInfo></DepositInfo>
      <MyAccounts></MyAccounts>
    </NuxtLayout>
  </div>
</template>

<script setup>
// definePageMeta({
//   middleware: "auth",
// });

definePageMeta({
  layout: "account-layout",
  pageTransition: {
    name: "page",
  },
});
</script>
