<template>
  <div>
    <NuxtLayout>
      <template #header>
        <Header>
          <p class="heading-1">Чат по операциям и поддержка</p>
        </Header>
      </template>
      <div class="content-container mt-[34px]">
        <section class="flex flex-row gap-1">
          <CardComponent
            padding="p-4"
            rounded="rounded-[30px]"
            class="w-[165px]"
          >
            <div class="flex flex-col gap-[22px]">
              <img
                src="~/assets/svgs/infoIcon.svg"
                class="h-[21px] w-[21px]"
                alt=""
              />
              <p class="w-[125px] body-text-small text-heading">
                частые вопросы
              </p>
            </div>
          </CardComponent>
          <CardComponent
            padding="p-4"
            rounded="rounded-[30px]"
            class="w-[165px]"
          >
            <div class="flex flex-col gap-[22px]">
              <img
                src="~/assets/svgs/Danger.svg"
                class="h-[21px] w-[21px]"
                alt=""
              />
              <p class="w-[125px] body-text-small text-heading">
                помощь со сделками
              </p>
            </div>
          </CardComponent>
        </section>
      </div>
      <div class="content-container flex flex-col gap-1 mt-6">
        <div v-for="message in chatMessages">
          <NuxtLink :to="`/chat/` + message.chatId">
            <ChatCard
              @click="selectChat(message)"
              :chat-logo="message.chatLogo"
              :chat-name="message.from"
              :last-message="message.message"
              :last-message-date="message.lastMessageTime"
              :unread-messages="message.unreadCount"
            >
            </ChatCard>
          </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "account-layout",
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});

import { data } from "~/constants/data";
import type { IChatInfo } from "~/types";
const { chatMessages } = data;

const chatStore = useChatStore();
const selectChat = (chat: IChatInfo) => {
  chatStore.setSelectedChat(chat);
};
</script>

<style lang="scss" scoped></style>
