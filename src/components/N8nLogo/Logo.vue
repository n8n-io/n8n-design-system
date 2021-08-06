<template>
	<a :href="url" v-if="url">
		<div :class="$style.image"></div>
		<span :class="$style.name"></span>
	</a>
</template>

<script lang="ts">
function docReady(fn: () => void) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

export default {
  name: "n8n-logo",
  data() {
	  return {
		url: '',
	  }
  },
  mounted() {
	docReady(() => {
		const style = getComputedStyle(document.body);
		this.url = style.getPropertyValue('--brand-url').replaceAll("\"", '').trim();
	});
  },
}
</script>


<style lang="scss" module>
.image {
	&:before {
		content: " ";
		display: inline-block;
		height: 30px;
		width: 59px;
		background-image: var(--brand-image-url);
	}
}

.name {
	&:before {
		color: white;
		display: inline-block;
		content: var(--brand-name);
	}
}
</style>