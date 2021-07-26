import N8nIconButton from "./IconButton.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Icon Button",
  component: N8nIconButton,
  argTypes: {
    title: {
      control: "text",
    },
    type: {
	control: "select",
	options: ["primary", "secondary"]
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
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
    backgrounds: { default: '--color-background-light' },
  },
};

const methods = {
  onClick: action("click"),
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    N8nIconButton,
  },
  template: '<n8n-icon-button v-bind="$props" @click="onClick" />',
  methods,
});

export const Button = Template.bind({});
Button.args = {
  icon: "plus",
  title: "my title"
};

const ManyTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    N8nIconButton,
  },
  template:
    '<div> <n8n-icon-button v-bind="$props" size="lg" @click="onClick" />  <n8n-icon-button v-bind="$props" size="md" @click="onClick" />  <n8n-icon-button v-bind="$props" size="sm" @click="onClick" />  <n8n-icon-button v-bind="$props" :loading="true" @click="onClick" />  <n8n-icon-button v-bind="$props" :disabled="true" @click="onClick" /></div>',
  methods,
});

export const Primary = ManyTemplate.bind({});
Primary.args = {
	icon: "plus",
	title: "my title",
	type: "primary"
};

export const Secondary = ManyTemplate.bind({});
Secondary.args = {
	icon: "plus",
	title: "my title",
	type: "secondary"
};

