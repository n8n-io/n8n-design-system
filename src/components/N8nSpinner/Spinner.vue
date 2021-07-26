<template functional>
  <n8n-icon icon="spinner" :size="props.size" spin />
</template>

<script>
// import N8nIcon from "../N8nIcon";
// Vue.component("N8nIcon", N8nIcon);

export default {
  name: "n8n-spinner",
  props: {
	size: {
		type: String,
		validator: function (value) {
			return ["sm", "md", "lg"].indexOf(value) !== -1;
		}
	},
  },
};
</script>
