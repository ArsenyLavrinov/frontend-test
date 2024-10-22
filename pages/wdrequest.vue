<template>
  <div>
    <NuxtLayout>
      <template #header>
        <WithdrawRequest class="mt-[110px]" />
      </template>
      <NuxtLink to="/">
        <ActionButton
          class="rounded-[50px] absolute bottom-[20px] w-[335px] content-container"
        >
          <p class="body-text text-white">Вернуться к “Счета и депозит”</p>
        </ActionButton>
      </NuxtLink>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ pageTransition: { name: "page" } });
</script>
