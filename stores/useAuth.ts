import type { userInfo } from "~/types";

// export const useAuth = () => {
//   return useState<userInfo>("isAuthenticated", () => {
//     return {
//       isAuthenticated: false,
//       email: null,
//       password: null,
//     };
//   });
// };

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
      console.log(email, password);
      if (email == "a" && password == "a") {
        this.isAuthenticated = true;
        this.email = "a";
        this.password = "a";

        navigateTo("/");
      }
    },
    checkAuth() {
      this.isAuthenticated = !!localStorage.getItem("authToken");
    },
  },
});
