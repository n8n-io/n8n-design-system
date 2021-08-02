<template functional>
  <n8n-button
    :type="props.type"
    :disabled="props.disabled"
    :size="props.size === 'xl' ? 'lg' : props.size"
    :loading="props.loading"
    :title="props.title"
    :icon="props.icon"
    :iconSize="props.iconSize || props.size"
    :theme="props.theme"
    @click="(e) => listeners.click && listeners.click(e)"
    circle
  />
</template>

<script lang="ts">
import Vue from "vue";
import N8nButton from "../N8nButton";

Vue.component("N8nButton", N8nButton);

export default {
  name: "n8n-icon-button",
  props: {
    type: {
      type: String,
    },
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
    theme: {
      type: String,
    },
  },
};
</script>
