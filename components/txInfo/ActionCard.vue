<template>
  <div class="content-container action-card">
    <div class="timer-info">
      <div class="icon">
        <img src="~/assets/icons/timerIcon.svg" alt="timer" />
      </div>
      <div class="flex flex-col gap-1">
        <p class="heading-4">
          Осталось:
          {{
            calculateTimeLeft().hours.toLocaleString("ru-RU") +
            ":" +
            calculateTimeLeft().minutes.toLocaleString("ru-RU")
          }}
        </p>
        <span class="body-text-small text-[#979797]">выберите действие:</span>
      </div>
    </div>
    <div class="flex flex-col gap-2.5 w-full">
      <NuxtLink :to="'/confirmed/' + transactionId">
        <button class="primary-button body-text bg-action-color">
          Принять перевод
        </button>
      </NuxtLink>

      <button class="secondary-button text-warn-color body-text bg-[#F6F6F6]">
        Отказаться от перевода
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  transactionFinishTime: {
    type: String,
    default: 0,
  },
  transactionId: {
    type: Number,
    default: 0,
  },
});

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  if (!props.transactionFinishTime)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const distance =
    new Date(
      Date.parse(props.transactionFinishTime.replace(/-/g, "/"))
    ).getTime() - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
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

  color: #fff;

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
