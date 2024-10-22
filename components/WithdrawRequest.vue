<template>
  <div class="status-card">
    <div :class="props.success === false ? 'fail-outer' : 'status-icon-outer'">
      <div :class="props.success === false ? 'fail-inner' : 'status-icon'">
        <NuxtImg
          :src="'/icons/' + (props.success ? 'wdSuccess.svg' : 'wdFail.svg')"
          alt="status-icon"
        />
      </div>
    </div>

    <div class="status-content">
      <h2>{{ props.heading }}</h2>
      <p>{{ props.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  heading: {
    type: String,
    default: "Заявка на вывод – создана",
  },
  description: {
    type: String,
    default: "В течение 2 часов на реквизиты будет отправлена сумма",
  },
  success: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped lang="scss">
.status-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;

  padding: 16px;
}

.fail-inner {
  background-color: #eb5757;
  position: relative;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fail-outer {
  background-color: #ffa2a2;
  border-radius: 50%;
  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-icon {
  background-color: #27ae60;
  position: relative;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-icon-outer {
  background-color: #6fcf97;
  border-radius: 50%;
  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-icon img {
  position: absolute;
  top: 33%;
  left: 33%;

  width: 33px;
  height: 33px;
}
.fail-inner img {
  position: absolute;
  top: 33%;
  left: 33%;

  width: 33px;
  height: 33px;
}

.status-content h2 {
  font-size: 18px;
  font-weight: bold;

  color: #333;
}

.status-content p {
  font-size: 14px;
  color: #777;
  margin: 8px 0 0 0;
}
</style>
