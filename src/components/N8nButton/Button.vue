<template functional>
  <component :is="$options.components.ElButton"
    :type="props.theme || 'primary'"
    :plain="props.type === 'outline'"
    :disabled="props.disabled"
    :size="$options.mapToSize(props.size)"
    :loading="props.loading"
    :title="props.title || props.label"
    :class="$style.button + (props.type === 'light'? ' is-light' : '')"
    :round="!props.circle"
    :circle="props.circle"
    :style="$options.styles(props)"
    @click="listeners.click"
  >
    <span :class="$style.icon" v-if="props.loading || props.icon">
      <component :is="$options.components.N8nSpinner"
      		v-if="props.loading" :size="props.iconSize" />
      <component :is="$options.components.N8nIcon"
        v-else-if="props.icon"
        :icon="props.icon"
        :size="props.iconSize"
      />
    </span>
    <span v-if="props.label">{{ props.label }}</span>
  </component>
</template>

<script lang="ts">
import { Button as ElButton } from "element-ui";
import N8nIcon from "../N8nIcon";
import N8nSpinner from "../N8nSpinner";

const sizeMap: {[size: string]: string} = {
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
      validator: (value: string): boolean => ["primary", "outline", 'light'].indexOf(value) !== -1,
    },
    theme: {
      	type: String,
        validator: (value: string): boolean => ["success", "warning", "danger", "info"].indexOf(value) !== -1,
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
    float: {
	type: String,
        validator: (value: string): boolean => ["left", "right"].indexOf(value) !== -1,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    }
  },
  components: {
	ElButton,
	N8nSpinner,
	N8nIcon,
  },
  mapToSize: (size: string): string => sizeMap[size],
  styles: (props: any): any => {
	return {
		...(props.float? {float: props.float} : {}),
		...(props.fullWidth? {width: '100%'} : {}),
	};
  }
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
