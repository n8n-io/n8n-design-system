import N8nLogo from "./Logo.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Logo",
  component: N8nLogo,
  argTypes: {
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/DxLbnIyMK8X0uLkUguFV4n/n8n-design-system_v1?node-id=5%3A1147",
    },
  },
};

const methods = {
  onClick: action("click"),
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    N8nLogo,
  },
  template: '<n8n-logo v-bind="$props" @click="onClick" />',
  methods,
});

export const Button = Template.bind({});
