<template>
  <div class="flex flex-row justify-between login__input items-center">
    <div class="flex flex-row gap-[22px] body-text-small items-center">
      <slot></slot>
    </div>
    <img
      src="~/assets/svgs/edit.svg"
      alt="Password"
      class="w-[24px] h-[24px]"
    />
  </div>
</template>
