import type { userInfo } from "~/types";

export const useAuthStore = defineStore("auth", {
  state: (): userInfo => {
    return {
      isAuthenticated: false,
      email: null,
      password: null,
    };
  },

  actions: {
    signIn(email: string, password: string) {
      if (email == "a" && password == "a") {
        this.isAuthenticated = true;
        this.email = "a";
        this.password = "a";

        navigateTo("/");
      }
    },
  },
});
