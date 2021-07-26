<template functional>
  <el-button
    type="primary"
    :plain="props.type === 'secondary'"
    :disabled="props.disabled"
    :size="$options.mapToSize(props.size)"
    :loading="props.loading"
    :title="props.title"
    :class="$style.button"
    @click="listeners.click"
    :round="!props.circle"
    :circle="props.circle"
  >
    <span  :class="$style.icon" v-if="props.loading || props.icon">
	<N8nSpinner v-if="props.loading" :size="props.iconSize" />
	<N8nIcon v-else-if="props.icon" :icon="props.icon" :size="props.iconSize" />
    </span>
    <span v-if="props.label">{{ props.label }}</span>
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
    },
    iconSize: {
      type: String,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
  mapToSize: (size) => sizeMap[size],
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
.icon {
	display: inline-flex;

	svg {
		display: block;
	}
}
</style>