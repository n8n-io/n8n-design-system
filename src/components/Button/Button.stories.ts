import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import N8nButton from './Button.vue';

export interface IButton {
	label: string;
	type?: string;
	size?: string;
	loading?: boolean;
	disabled?: boolean;
	icon?: string;
}
      
export const methods = {
	onClick: action('click'),
};

const stories = storiesOf('Atoms / Buttons', module);

export const DefaultProps: IButton = {
	label: 'Button'
};

const parameters = {
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
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/DxLbnIyMK8X0uLkUguFV4n/n8n-design-system_v1?node-id=5%3A1147'
	}
}

stories.add('Button', () => ({
        components: { N8nButton },
        template: `<n8n-button v-bind="DefaultProps" @click="onClick" />`,
	data: () => ({ DefaultProps }),
	methods,
}), parameters);

const manyTemplate = '<div> <n8n-button v-bind="Props" @click="onClick" size="large" />  <n8n-button v-bind="Props" @click="onClick" size="medium" />  <n8n-button v-bind="Props" @click="onClick" size="small" />  <n8n-button v-bind="Props" @click="onClick" :loading="true" />  <n8n-button v-bind="Props" @click="onClick" :disabled="true" /></div>';

stories.add('Primary', () => ({
        components: { N8nButton },
	template: manyTemplate,
	data: () => ({ Props: {
		...DefaultProps,
		type: 'primary'
	}}),
	methods,
}), parameters);

stories.add('Secondary', () => ({
        components: { N8nButton },
	template: manyTemplate,
	data: () => ({ Props: {
		...DefaultProps,
		type: 'secondary'
	}}),
	methods,
}), parameters);

stories.add('WithIcon', () => ({
        components: { N8nButton },
	template: manyTemplate,
	data: () => ({ Props: {
		...DefaultProps,
		icon: 'plus-circle'
	}}),
	methods,
}), parameters);