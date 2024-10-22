<template>
  <section class="content-container flex flex-col">
    <div>
      <div class="flex flex-row justify-between items-center mt-10">
        <h1 class="body-text">Мои данные</h1>
        <img
          src="~/assets/svgs/menu/Profile.svg"
          alt="Profile"
          class="w-[24px] h-[24px]"
        />
      </div>
      <div class="flex flex-col mt-2 gap-2">
        <EditProfile>
          <p>Email</p>
          <p class="flex flex-row body-text-small items-center">
            {{ data.profile.email }}
          </p>
        </EditProfile>
        <EditProfile>
          <p>Пароль</p>
          <p class="flex flex-row body-text-small items-center">
            {{ data.profile.password }}
          </p>
        </EditProfile>
      </div>

      <div class="flex flex-row justify-between items-center mt-[42px]">
        <h1 class="body-text">Реферальная программа</h1>
        <img
          src="~/assets/svgs/referral.svg"
          alt="Profile"
          class="w-[24px] h-[24px]"
        />
      </div>
      <NuxtLink
        to="/referrals"
        class="flex flex-row mt-2 bg-card-bg-color rounded-[30px] p-4 justify-between"
      >
        <div class="flex flex-col gap-0.5">
          <p class="caption-text text-heading">Приглашения</p>
          <p class="caption-text">Приглашенные реффералы</p>
        </div>
        <img src="~/assets/svgs/referralActive.svg" alt="" />
      </NuxtLink>

      <div
        class="flex items-center justify-center py-[20px] bg-card-bg-color absolute bottom-[113px] w-[335px] h-[58px] rounded-[50px]"
        @click="showPopup = true"
      >
        <p class="text-body-text text-warn-color">Удалить аккаунт</p>
      </div>
    </div>

    <transition name="slide-up">
      <div v-if="showPopup" class="popup-overlay">
        <div class="popup-content">
          <div class="relative flex flex-row">
            <h2 class="heading-1 text-start">
              Вы уверены, что хотите удалить аккаунт
            </h2>
            <img
              class="absolute w-[59px] h-[31px] right-[45px] bottom-[2px]"
              src="~/assets/svgs/logo.svg"
            />
          </div>

          <p class="caption-text text-start mt-2">
            С аккаунтом удалится вся история транзакций, привязки к счетам и
            баланс депозита.
          </p>
          <div class="popup-button">
            <button @click="deleteAccount" class="confirm-button bg-warn-color">
              Удалить аккаунт
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
  <div
    class="absolute w-full h-[554px] opacity-0 z-10 top-0"
    v-if="showPopup"
    @click.self="close"
  ></div>
</template>

<script setup>
import { data } from "~/constants/data";

const showPopup = ref(false);

function deleteAccount() {
  showPopup.value = false;
}

function close() {
  showPopup.value = false;
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.popup-button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.confirm-button {
  display: flex;
  flex-direction: column;
  width: 334px;

  align-items: center;
  justify-items: center;
  color: white;
  padding: 20px;
  border-radius: 50px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>
