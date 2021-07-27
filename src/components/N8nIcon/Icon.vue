<template functional>
  <font-awesome-icon
    :class="$style[props.size]"
    :icon="props.icon"
    :spin="props.spin"
  />
</template>

<script>
export default {
  name: "n8n-icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.sm {
  font-size: 0.85em;
  height: 0.85em;
  width: 0.85em !important;
}

.md {
  font-size: 1em;
  height: 1em;
  width: 1em !important;
}

.lg {
  font-size: 1.33em;
  height: 1.33em;
  width: 1.33em !important;
}
</style>
