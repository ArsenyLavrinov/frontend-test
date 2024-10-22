<template>
  <button
    @click="props.action"
    :class="
      'action-btn action-btn__text flex flex-row justify-center items-center gap-2.5 ' +
      props?.color +
      ' ' +
      props?.textColor
    "
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  action: {
    type: Function,
    default: () => {
      console.log("action");
    },
  },
  color: {
    type: String,

    default: () => {
      return "bg-action-color";
    },
  },
  textColor: {
    type: String,

    default: () => {
      return "text-white";
    },
  },
});
</script>
