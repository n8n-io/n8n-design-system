<template>
	<table :class="$style.table">
		<tr  v-for="c in classes" :key="c">
			<td>.{{c}}</td>
			<td :class="$style[c]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in luctus sapien, a suscipit neque.</td>
		</tr>
	</table>
</template>

<script lang="ts">
export default {
  name: "text-classes",
  data() {
	  return {
		observer: null as null | MutationObserver,
		classes: ['heading1', 'heading2', 'heading3', 'heading4', 'body-large', 'body-medium', 'body-small']
	  };
  },
};
</script>

<style lang="scss" module>
// todo move to some import

.heading1 {
	font-size: var(--font-size-2xl);
	line-height: var(--font-line-height-compact);
}

.heading2 {
	font-size: var(--font-size-xl);
	line-height: var(--font-line-height-loose);
}

.heading3 {
	font-size: var(--font-size-m);
	line-height: var(--font-line-height-loose);
}

.heading4 {
	font-size: var(--font-size-s);
	line-height: var(--font-line-height-regular);
}

.body-large {
	font-size: var(--font-size-m);
	line-height: var(--font-line-height-xloose);
}

.body-medium {
	font-size: var(--font-size-s);
	line-height: var(--font-line-height-loose);
}

.body-small {
	font-size: var(--font-size-2xs);
	line-height: var(--font-line-height-loose);
}


.table {
	text-align: center;
	color: var(--color-text-base);

	* {
		padding-bottom: 1em;
	}
}

</style>
