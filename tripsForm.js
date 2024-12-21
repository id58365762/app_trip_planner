export function dataIsLoading(state = false, action) {
if (action.type === 'DATA_IS_LOADING') return action.isLoading;
return state;
}
export function tripsSummary(state = {}, action) {
if (action.type === 'GET_TRIPS_SUMMARY') return action.trips;
return state;
}
export function currentTripData(state = {}, action) {
if (action.type === 'GET_CURRENT_TRIP') return action.trip;
return state;
}
export default combineReducers({ dataIsLoading, tripsSummary,
currentTripData,
});