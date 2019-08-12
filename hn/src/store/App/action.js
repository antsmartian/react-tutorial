const NAMESPACE = "@hn/app";

export const actionTypes = {
	SET_THEME: `${NAMESPACE}/SET_THEME`
}

const actions = {
	setTheme : (payload = {}) => ({type: actionTypes.SET_THEME, payload})
}

export default actions;

