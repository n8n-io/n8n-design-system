<template functional>
	<font-awesome-icon :icon="props.icon" />
</template>

<script >
export default {
  name: "n8n-icon",
  props: {
    icon: {
	type: String,
	required: true,
    },
  },
};
</script>