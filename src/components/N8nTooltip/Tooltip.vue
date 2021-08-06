<template functional>
  <component
    :is="$options.components.ElTooltip"
    effect="dark"
  >
  </component>
</template>
	

<script lang="ts">
import ElTooltip from "element-ui/packages/tooltip";

export default {
  name: "n8n-input",
  props: {
	 content: {

	 }
  },
  components: {
	ElTooltip,
  },
};
</script>

<style lang="scss" module>
</style>
