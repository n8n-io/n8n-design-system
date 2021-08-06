import N8nInput from "./Input.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Input",
  component: N8nInput,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "textarea"],
    },
    placeholder: {
	control: "text"
    },
    label: {
	control: "text"
    }
  },
  parameters: {
    backgrounds: { default: "--color-background-light" },
  },
};

const methods = {
  onInput: action("input"),
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    N8nInput,
  },
  template: '<n8n-input v-bind="$props" v-model="val" @input="onInput" />',
  data() {
	return {
		val: '',
	}
  },
  methods,
});

export const Input = Template.bind({});
Input.args = {
   placeholder: "placeholder..."
};

export const Text = Template.bind({});
Text.args = {
   type: 'text',
   label: 'text input:',
   placeholder: "placeholder..."
};

export const TextArea = Template.bind({});
TextArea.args = {
   type: 'textarea',
   label: 'text area input:',
   placeholder: "placeholder..."
};