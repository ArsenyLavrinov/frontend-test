<template>
  <div class="flex flex-col flex-1 caption-text">
    <!-- Сообщения чата -->
    <div class="flex flex-col flex-1 space-y-4 justify-end">
      <div v-for="(chat, index) in messages" :key="index">
        <!-- Проверяем, от кого сообщение, чтобы применить нужный стиль -->
        <div
          v-for="(message, msgIndex) in chat.messages"
          :key="msgIndex"
          :class="
            chat.from === 'Me' ? 'flex justify-end' : 'flex justify-start'
          "
        >
          <div
            :class="[
              'p-3 max-w-xs',
              chat.from === 'Me'
                ? 'bg-action-color text-white  '
                : 'bg-card-bg-color text-heading',
              msgIndex === 0
                ? chat.from == 'Me'
                  ? 'message-border-first-me'
                  : 'message-border-first-user'
                : 'message-border',
            ]"
            class="mt-1"
          >
            {{ message }}
          </div>
        </div>
      </div>
    </div>

    <!-- Поле ввода и кнопка отправки -->
    <div
      class="flex items-center justify-between space-x-2 bottom-[14px] max-w-[335px] w-full mt-[24px] mb-[6px]"
    >
      <input
        type="text"
        placeholder="Введите сообщение"
        class="flex-1 p-3 border rounded-full focus:outline-none"
      />
      <button class="bg-action-color p-3 rounded-full text-white">
        <NuxtImg src="icons/send.svg" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const chatStore = useChatStore();
const { getMessages } = chatStore;

onMounted(() => {
  getMessages();
});

const { messages } = storeToRefs(chatStore);
</script>

<style scoped lang="scss">
.message-border-first-user {
  border-radius: 0px 20px 20px 20px;
}

.message-border-first-me {
  border-radius: 20px 0px 20px 20px;
}

.message-border {
  border-radius: 20px;
}
</style>
