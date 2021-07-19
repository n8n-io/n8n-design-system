<template>
<div :class="$style.section">
	<div  v-for="color in colors" :key="color" :class="$style.container">
		<div :class="$style.circle" :style="{backgroundColor: `var(${color})`}"></div>
		<span>{{color}}</span>
		<span :class="$style.color">{{getHSLValue(color)}}</span>
		<span :class="$style.color">{{getHexValue(color)}}</span>
	</div>
</div>
</template>

<script lang="ts">
function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function getHex(hsl: string) {
	const colors = hsl.replace('hsl(', '').replace(')', '').replace(/%/g, '').split(',')
		.map((n: string) => parseInt(n));

	return hslToHex(colors[0], colors[1], colors[2]);
}

export default {
  name: "color-circles",
  props: {
    colors: {
      type: Array,
      required: true,
    }
  },
  methods: {
	  getHSLValue(color: string) {
		const style = getComputedStyle(document.body)

		return style.getPropertyValue(color);
	  },
	  getHexValue(color: string) {
		const hsl = this.getHSLValue(color);

		return getHex(hsl);
	  },
  },
};
</script>

<style lang="scss" module>
.section {
	display: flex;
}

.name {
	align-self: center;
}

.container {
	width: 140px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	align-self: flex-start;
	padding: 5px;
}

.circle {
	border-radius: 50%;
	height: 80px;
	width: 80px;
	margin-bottom: 5px;
	border: 1px solid lightgray;
}

.color {
	font-size: .8em;
}

</style>
