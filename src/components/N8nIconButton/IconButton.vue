<template functional>
  <n8n-button
    type="primary"
    :disabled="props.disabled"
    :size="props.size"
    :loading="props.loading"
    :title="props.title"
    :icon="props.icon"
    :iconSize="props.size"
    @click="listeners.click"
    circle
  ></n8n-button>
</template>

<script lang="ts">
import Vue from "vue";
import N8nButton from "../N8nButton";

Vue.component("N8nButton", N8nButton);

export default {
  name: "n8n-icon-button",
  props: {
    title: {
      type: String,
    },
    size: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@use "~/theme/src/button.scss";
</style>
