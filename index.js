const appReducer = combineReducers({ token, userInfo, mainForm, tripsForm,});
const rootReducer = (state, action) => {
// when a logout action is dispatched it will reset redux state
if (action.type === 'USER_LOGGED_OUT') {
state = undefined;
}
69
return appReducer(state, action);
};
export default rootReducer;