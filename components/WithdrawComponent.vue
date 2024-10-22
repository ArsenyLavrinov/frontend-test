<template>
  <section class="content-container mt-[40px] flex flex-col gap-2">
    <h1 class="body-text">Информация для вывода</h1>

    <CardComponent class="mt-2" rounded="rounded-[15px]">
      <div class="container-stretched">
        <p class="body-text-small">Доллар США (USD)</p>
        <img src="~/assets/svgs/arrowDown.svg" alt="" />
      </div>
    </CardComponent>
    <CardInput class="mt-2" rounded="rounded-[15px]" placeholder="Реквизиты">
    </CardInput>
    <CardInput class="mt-2" rounded="rounded-[15px]" placeholder="Сумма">
    </CardInput>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
