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
		classes: ['heading1']
	  };
  },
};
</script>

<style lang="scss" module>
.heading1 {
	color: red;
}

.table {
	text-align: center;
	color: var(--color-text-base);
}

</style>
