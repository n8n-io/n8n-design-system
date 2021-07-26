<template functional>
  <el-button
    :type="props.type"
    :disabled="props.disabled"
    :size="$options.mapToSize(props.size)"
    :loading="props.loading"
    :title="props.title"
    :circle="props.type === 'primary'"
    @click="listeners.click"
  >
	<N8nSpinner v-if="props.loading" :size="$options.mapToIconSize(props.size)" />
	<N8nIcon v-else :icon="props.icon" :size="$options.mapToIconSize(props.size)"/>
  </el-button>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "element-ui";
import N8nIcon from "../N8nIcon";
import N8nSpinner from "../N8nSpinner";

Vue.component("ElButton", Button);
Vue.component("N8nIcon", N8nIcon);
Vue.component("N8nSpinner", N8nSpinner);

const sizeMap = {
  sm: "small",
  md: "medium",
  lg: "",
};

const iconSizeMap = {
  sm: 'md'
};

export default {
  name: "n8n-button",
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "secondary"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
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
  mapToSize: (size: string) => sizeMap[size],
  mapToIconSize: (size: string) => iconSizeMap[size] || size,
};
</script>

<style lang="scss">
@use "~/theme/src/button.scss";
</style>