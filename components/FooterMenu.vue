<template>
  <div>
    <section
      class="absolute bottom-0 content-container flex flex-row gap-1 items-center justify-center"
    >
      <NuxtLink to="/">
        <MenuIcon color="#1A1A1A" :path="Home"> </MenuIcon>
      </NuxtLink>

      <div class="flex flex-row bg-white rounded-[40px] px-10">
        <NuxtLink to="/transactions">
          <MenuIcon color="#1A1A1A" :path="TransactionHistory"> </MenuIcon>
        </NuxtLink>

        <NuxtLink to="/chat">
          <MenuIcon color="#1A1A1A" :path="Chat"> </MenuIcon>
        </NuxtLink>

        <NuxtLink to="/myAccounts">
          <MenuIcon color="#1A1A1A" :path="MyAccounts"> </MenuIcon>
        </NuxtLink>

        <!-- <MenuIcon>
        <img src="~/assets/svgs/menu/TransactionHistory.svg" alt="menu" />
      </MenuIcon>
      <MenuIcon>
        <img src="~/assets/svgs/menu/Chat.svg" alt="menu" />
      </MenuIcon>
      <MenuIcon>
        <img
          src="~/assets/svgs/menu/MyAccounts.svg"
          alt="menu"
          stroke="#FFFFFF "
        />
      </MenuIcon> -->
      </div>

      <NuxtLink to="/profile">
        <MenuIcon color="#ffffff" :path="Profile"> </MenuIcon>
      </NuxtLink>

      <!-- <MenuIcon>
      <img src="~/assets/svgs/menu/Profile.svg" alt="menu" />
    </MenuIcon> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import Home from "~/assets/svgs/menu/Home.svg";
import TransactionHistory from "~/assets/svgs/menu/TransactionHistory.svg";
import Chat from "~/assets/svgs/menu/Chat.svg";
import MyAccounts from "~/assets/svgs/menu/MyAccounts.svg";
import Profile from "~/assets/svgs/menu/Profile.svg";
</script>
