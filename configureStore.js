export default function configureStore(initialState) {
function select(state) {
return state.token;
}
let currentToken;
function handleChange() {
let previousToken = currentToken;
currentToken = select(store.getState());
if (previousToken !== currentToken) {
if (currentToken !== '')
localStorage.setItem('token', currentToken);
axios.defaults.headers.common['Authorization'] = 'Bearer ' +
currentToken;
}
}
const store = createStore(rootReducer, initialState, composeWithDevTools(
applyMiddleware(thunk),
));
store.subscribe(handleChange);
return store;
}