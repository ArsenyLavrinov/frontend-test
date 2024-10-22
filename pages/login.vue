<template>
  <div>
  <NuxtLayout>
    <template #header>
      <Header>
        <img class="w-[59px] h-[31px]" src="~/assets/svgs/logo.svg"></img>
      </Header>
    </template>

    <AuthComponent />
  </NuxtLayout>
</div>
</template>


<script setup lang="ts">
definePageMeta({  
  pageTransition:{
    name: "page",
  }

});
</script>

<style lang="scss" scoped></style>
