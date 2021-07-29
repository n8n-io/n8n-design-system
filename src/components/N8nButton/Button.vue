<template functional>
  <el-button
    :type="props.theme ? props.theme : 'primary'"
    :plain="props.type === 'outline'"
    :disabled="props.disabled"
    :size="$options.mapToSize(props.size)"
    :loading="props.loading"
    :title="props.title ? props.title : props.label"
    :class="(props.fullWidth ? $style.fullWidth : $style.button) + (props.type === 'light'? ' is-light' : '')"
    :round="!props.circle"
    :circle="props.circle"
    :style="$options.styles(props)"
    @click="listeners.click"
  >
    <span :class="$style.icon" v-if="props.loading || props.icon">
      <n8n-spinner v-if="props.loading" :size="props.iconSize" />
      <n8n-icon
        v-else-if="props.icon"
        :icon="props.icon"
        :size="props.iconSize"
      />
    </span>
    <span v-if="props.label">{{ props.label }}</span>
  </el-button>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "element-ui";
import N8nIcon from "../N8nIcon";
import N8nSpinner from "../N8nSpinner";

Vue.component('ElButton', Button);
Vue.component(N8nIcon.name, N8nIcon);
Vue.component(N8nSpinner.name, N8nSpinner);

const sizeMap: {[size: string]: string} = {
  sm: "small",
  md: "medium",
  lg: "",
  xl: "",
};

export default {
  name: "n8n-button",
  props: {
    label: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "primary",
      validator: (value: string): boolean => ["primary", "outline", 'light'].indexOf(value) !== -1,
    },
    size: {
      type: String,
      default: "md",
      validator: (value: string): boolean => ["sm", "md", "lg"].indexOf(value) !== -1,
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
    },
    iconSize: {
      type: String,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    theme: {
      	type: String,
        validator: (value: string): boolean => ["success", "warning", "danger", "info"].indexOf(value) !== -1,
    },
    float: {
	type: String,
        validator: (value: string): boolean => ["left", "right"].indexOf(value) !== -1,
    }
  },
  mapToSize: (size: string): string => sizeMap[size],
  styles: (props: any): any => props.float? {float: props.float} :{},
};
</script>

<style lang="scss">
@use "~/theme/src/button.scss";
</style>

<style lang="scss" module>
.button {
  > i {
    display: none;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span + span {
    margin-left: var(--spacing-3xs);
  }
}

.fullWidth {
	composes: button;
	width: 100%;
}

.icon {
  display: inline-flex;

  svg {
    display: block;
  }
}
</style>
