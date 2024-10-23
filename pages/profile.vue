<template>
    <div>
  <NuxtLayout>
    <template #header>
      <Header>
        <div class="flex flex-row items-center justify-between">
          <h1 class="heading-1">Профиль</h1>

          <img class="w-[24px] h-[24px]" src="~/assets/svgs/Logout.svg"></img>

        </div>
      </Header>
      <MyProfileData></MyProfileData>
      
    </template>
    
  </NuxtLayout>
</div>
</template>

<script setup>
definePageMeta({
  layout: "account-layout",
  pageTransition:{
    name: "page",
  }
});
</script>
