import IconButton from './IconButton';
import N8nButton from '../N8nButton';

IconButton.install = function (Vue) {
	Vue.component(N8nButton.name, N8nButton);
	Vue.component(IconButton.name, IconButton);
};

export default IconButton;
