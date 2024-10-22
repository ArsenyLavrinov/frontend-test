<template>
  <div>
    <NuxtLayout class="flex flex-col justify-between h-screen">
      <template #header>
        <HeaderWithArrowBack
          :break-words="true"
          path="/chat"
          :text="selectedChat.from"
        ></HeaderWithArrowBack>
      </template>
      <section class="content-container mt-[34px]">
        <ChatMessages :chat-id="chatId"></ChatMessages>
      </section>
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

const chatStore = useChatStore();

const route = useRoute();
const chatId = route.params.id;
const { selectedChat } = storeToRefs(chatStore);

onMounted(() => {
  if (!selectedChat.value?.chatId) {
    navigateTo("/transactions");
  }
});
</script>

<style lang="scss" scoped></style>
