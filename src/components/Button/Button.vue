<template functional>
  <el-button
    type="primary"
    :plain="props.type === 'secondary'"
    :disabled="props.disabled"
    :loading="props.loading"
    :size="$options.mapToSize(props.size)"
    round
  >
    <N8nIcon v-if="props.icon" :icon="props.icon" />
    {{ props.label }}
  </el-button>
</template>

<script >
import Vue from "vue";
import { Button } from "element-ui";
import N8nIcon from '../Icon/Icon.vue';

Vue.component("ElButton", Button);
Vue.component("N8nIcon", N8nIcon);

const sizeMap = {
  small: "small",
  medium: "medium",
  large: "",
};

export default {
  name: "n8n-button",
  props: {
    label: {
      type: String,
      required: true,
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
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
  },
  mapToSize: (size) => sizeMap[size],
};
</script>
