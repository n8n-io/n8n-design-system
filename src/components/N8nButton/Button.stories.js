import N8nButton from "./Button.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Button",
  component: N8nButton,
  argTypes: {
    label: {
      control: "text",
    },
    title: {
      control: "text",
    },
    type: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
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
    N8nButton,
  },
  template: '<n8n-button v-bind="$props" @click="onClick" />',
  methods,
});

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};

const ManyTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    N8nButton,
  },
  template:
    '<div> <n8n-button v-bind="$props" size="large" @click="onClick" />  <n8n-button v-bind="$props" size="medium" @click="onClick" />  <n8n-button v-bind="$props" size="small" @click="onClick" />  <n8n-button v-bind="$props" :loading="true" @click="onClick" />  <n8n-button v-bind="$props" :disabled="true" @click="onClick" /></div>',
  methods,
});

export const Primary = ManyTemplate.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
};

export const Secondary = ManyTemplate.bind({});
Secondary.args = {
  type: "secondary",
  label: "Button",
};

export const WithIcon = ManyTemplate.bind({});
WithIcon.args = {
  label: "Button",
  icon: "plus-circle",
};
