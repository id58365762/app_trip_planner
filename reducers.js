export function token(state = '', action) {
if (action.type === 'SAVE_TOKEN') return action.token;
return state;
}
export function userInfo(state = {}, action) {
if (action.type === 'USER_INFO') return action.user;
return state;
}