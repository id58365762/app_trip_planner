export function actions(user) {
return (dispatch) => {
axios.post("register", {user})
.then((response) => {
if (response.status !== 200) {
throw Error(response.statusText);
}
dispatch(token(response.data.token));
})
.catch(() => console.log("actions error"));
};
}
export const userLoginFetch = user => {
return dispatch => {
axios.post("/api/auth/", {email: user.email, password: user.password })
.then((response) => {
if (response.status !== 200) {
throw Error(response.statusText);
}
dispatch(token(response.data.token));
})
.catch(() => console.log("loginFetch error"));
}
};