<template>
  <div>
    <NuxtLayout>
      <HeaderWithArrowBack
        path="/"
        text="Пополненние депозита"
      ></HeaderWithArrowBack>
      <div class="mt-[50px] flex center">
        <img src="~/assets/svgs/qr.svg " />
      </div>
      <DepositComponent></DepositComponent>
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
