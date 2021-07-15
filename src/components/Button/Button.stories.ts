import N8nButton from './Button.vue';

export default {
	title: 'Atoms/Button',
	component: N8nButton,
	argTypes: {
		type: {
			control: 'select',
			options: ['primary', 'secondary']
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large']
			},
		},
		loading: {
			control: {
				type: 'boolean'
			},
		},
		icon: {
			control: {
				type: 'text',
			},
		},
	},
};

const Template = (args, {
	argTypes
}) => ({
	props: Object.keys(argTypes),
	components: {
		N8nButton
	},
	template: '<n8n-button v-bind="$props" />',
});

export const Button = Template.bind({});
Button.args = {
	label: 'Button',
};

const ManyTemplate = (args, {
	argTypes
}) => ({
	props: Object.keys(argTypes),
	components: {
		N8nButton
	},
	template: '<div> <n8n-button v-bind="$props" size="large" />  <n8n-button v-bind="$props" size="medium" />  <n8n-button v-bind="$props" size="small" />  <n8n-button v-bind="$props" loading="true" />  <n8n-button v-bind="$props" disabled="true" /></div>',
});

export const Primary = ManyTemplate.bind({});
Primary.args = {
	type: 'primary',
	label: 'Button',
};

export const Secondary = ManyTemplate.bind({});
Secondary.args = {
	type: 'secondary',
	label: 'Button',
};

export const WithIcon = ManyTemplate.bind({});
WithIcon.args = {
	label: 'Button',
	icon: 'plus-circle'
};