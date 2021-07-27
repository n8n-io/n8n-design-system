import { Button as ElButton } from "element-ui";
import N8nButton from "./Button";
import N8nIcon from "../N8nIcon";
import N8nSpinner from "../N8nSpinner";

N8nButton.install = function (Vue) {
	Vue.component(N8nSpinner.name, N8nSpinner);
	Vue.component(N8nIcon.name, N8nIcon);
	Vue.component(N8nButton.name, N8nButton);
};

export default N8nButton;
