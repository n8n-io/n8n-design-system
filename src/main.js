import * as components from "./components";

for (const key in components) {
  const component = components[key];
  component.install = function (Vue) {
    Vue.component(component.name, component);
  };
}

export * from "./components";

import Switch from 'element-ui/lib/switch';
import Select from 'element-ui/lib/select';
import Option from 'element-ui/lib/option';

export {
	Switch,
	Select,
	Option
}
