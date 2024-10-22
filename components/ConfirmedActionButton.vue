<template>
  <div class="content-container action-card">
    <div class="flex flex-col gap-2.5 w-full">
      <NuxtLink :to="primaryTo">
        <button class="primary-button body-text bg-card-bg-color text-heading">
          {{ props.primaryBtnText }}
        </button>
      </NuxtLink>
      <NuxtLink :to="secondaryTo">
        <button class="secondary-button text-white body-text bg-action-color">
          {{ props.secondaryBtnText }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  primaryBtnText: {
    type: String,
    default: "Подать аппеляцию",
  },
  primaryTo: {
    type: String,
    default: "/",
  },

  secondaryTo: {
    type: String,
    default: "/",
  },
  secondaryBtnText: {
    type: String,
    default: "На главную",
  },
});
</script>

<style scoped lang="scss">
.action-card {
  width: 100%;
  bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  position: absolute;
}

.timer-info {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.icon {
  background-color: #e0f7fa;
  border-radius: 50%;
  padding: 8px;
}

.icon img {
  width: 24px;
  height: 24px;
}

.primary-button {
  width: 100%;
  padding: 20px 0;

  border-radius: 50px;
  cursor: pointer;
}

.secondary-button {
  width: 100%;
  padding: 20px 0;

  border-radius: 50px;
  cursor: pointer;
}
</style>
