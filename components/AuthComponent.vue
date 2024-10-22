<template>
  <section>
    <div class="content-container">
      <div class="flex flex-col justify-start">
        <h2 class="heading-1 mt-[80px]">Войти</h2>

        <p class="mt-2.5">
          Добро пожаловать! <br />
          Войдите чтобы продолжить
        </p>
      </div>
      <div class="space-y-2">
        <input
          v-model="email"
          type="text"
          class="mt-[60px] login__input placeholder-custom-text"
          placeholder="Email"
        />
        <input
          v-model="password"
          type="text"
          class="login__input placeholder-custom-text"
          placeholder="Пароль"
        />
      </div>

      <ActionButton :action="signIn" class="mt-[72px] rounded-[50px]"
        ><NuxtLink to="/">Войти</NuxtLink></ActionButton
      >
    </div>

    <div class="flex flex-row mt-[33px] items-center justify-center">
      <hr class="h-px w-[100px]" />
      <p class="ml-[8px] mr-[8px] placeholder-custom-text">или войти через</p>
      <hr class="h-px w-[100px]" />
    </div>

    <div class="flex flex-col justify-center items-center content-container">
      <img
        class="mt-[33px] mb-[30px] h-[56px] w-[56px]"
        src="~/assets/icons/google.png"
        alt=""
      />
      <div class="flex flex-row font-bold text-[14px]">
        <p>
          Нет аккаунта,
          <NuxtLink to="/login" class="text-action-color"
            >Зарегестрируйтесь</NuxtLink
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// onBeforeMount(() => {
//   if (localStorage.getItem("authToken")) {
//     navigateTo("/");
//   }
// });

const authStore = useAuthStore();

const { isAuthenticated } = storeToRefs(authStore);

const email = ref("");
const password = ref("");

const signIn = () => {
  authStore.signIn(email.value, password.value);
  localStorage.setItem("authToken", "auth23");
};
</script>
