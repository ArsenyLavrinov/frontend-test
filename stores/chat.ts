import type { IChatInfo, IChatMessage } from "~/types";

import { data } from "~/constants/data";

export const useChatStore = defineStore("chat", {
  state: () => {
    return {
      messages: [] as IChatMessage[],
      selectedChat: {} as IChatInfo,
    };
  },
  actions: {
    getMessages() {
      this.messages = data.selectedChatMessages;
    },
    setSelectedChat(chat: IChatInfo) {
      this.selectedChat = chat;
    },
  },
});
