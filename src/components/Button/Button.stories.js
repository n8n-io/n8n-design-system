import N8nButton from './Button.vue';

export default {
	title: 'Atoms/Button',
	component: N8nButton,
	argTypes: {
		type: {
			control: 'select',
			options: ['primary', 'secondary'],
		},
		size: {
			control: {
				type: 'select',
				options: ['small', 'medium', 'large']
			},
		},
		disabled: {
			control: {
				type: 'boolean'
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
	template: '<n8n-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
	type: 'primary',
	label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	type: 'secondary',
	label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
	label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
	label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
	size: 'small',
	label: 'Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
	label: 'Button',
	icon: 'plus-circle'
};