<template functional>
  <div>
	<label :class="$style.label" v-if="props.label">
		<span>{{props.label}}</span>
		<component
			:is="$options.components.ElInput"
			:value="props.value"
			:type="props.type"
			:placeholder="props.placeholder"
			@input="listeners.input"
		/>
	</label>
	<component
		v-else
		:is="$options.components.ElInput"
		:value="props.value"
		:type="props.type"
		:placeholder="props.placeholder"
		@input="listeners.input"
	/>
  </div>
</template>

<script lang="ts">
import ElInput from "element-ui/packages/input";

import N8nTooltip from "../N8nTooltip";

export default {
  name: "n8n-input",
  props: {
    value: {
	type: String,
    },
    type: {
	type: String,
    },
    placeholder: {
	type: String,
    },
    label: {
	type: String,
    }
  },
  components: {
	ElInput,
	N8nTooltip,
  },
};
</script>

<style lang="scss" module>
.label {
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-s);
}
</style>
