<template>
  <section
    class="flex flex-row bg-card-bg-color rounded-[90px] justify-between items-center"
  >
    <div class="flex flex-row gap-2.5 items-center pl-4 py-4">
      <NuxtImg
        :src="'icons/' + props.chatLogo"
        class="w-6 h-6"
        alt=""
        loading="lazy"
      />
      <div class="flex flex-col">
        <h1 class="body-text-small text-heading">{{ props.chatName }}</h1>
        <p class="body-text-small text-secondary-gray">
          {{ props.lastMessage.slice(0, 25) }}
        </p>
      </div>
    </div>
    <div class="flex flex-col items-end pr-4 py-4">
      <h2
        class="text-secondary-gray font-gilroy text-[14px] font-semibold leading-[17px] text-left"
      >
        {{ proccessDate() }}
      </h2>
      <p
        class="bg-heading text-white px-2 py-1 rounded-[40px] text-bold text-[9px] text-center leading-[130%] font-gilroy"
      >
        {{ props.unreadMessages.toLocaleString() }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  chatLogo: {
    type: String,
    required: true,
  },
  chatName: {
    type: String,
    required: true,
  },
  lastMessageDate: {
    type: String,
    required: true,
  },
  lastMessage: {
    type: String,
    required: true,
  },
  unreadMessages: {
    type: Number,
    required: true,
  },
});

const proccessDate = () => {
  const date = new Date(Date.parse(props.lastMessageDate));

  return `${
    date.getHours().toLocaleString().length == 1
      ? date.getHours().toString() + 0
      : date.getHours().toString()
  }:${
    date.getMinutes().toLocaleString().length == 1
      ? date.getMinutes().toString() + 0
      : date.getMinutes().toString()
  }`;
};
</script>
