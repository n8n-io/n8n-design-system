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
    round
  >
    <span  :class="$style.icon" v-if="props.loading || props.icon">
	<N8nSpinner v-if="props.loading" />
	<N8nIcon v-else-if="props.icon" :icon="props.icon"/>
    </span>
    <span>{{ props.label }}</span>
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
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
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
}
.icon {
	margin-right: var(--spacing-3xs);
	font-size: 85%;
	display: inline-flex;

	svg {
		display: block;
	}
}
</style>