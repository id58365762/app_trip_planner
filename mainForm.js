export const tripDataSend = tripInfo => {
return () => {
axios.post("send", tripInfo)
.then((response) => {
if (response.status !== 200) {
throw Error(response.statusText);
}
})
.catch(() => console.log("tripDataSend error"));
}
};
export const tripDataGet = user => {
return dispatch => {
axios.get('get_trips_summary', user)
.then((response) => {
if (response.status !== 200) {
throw Error(response.statusText);
}
dispatch(tripsSummary(response.data.trips));
})
.catch(() => console.log("tripDataGet error"));
}
};
export const currentTripDataGet = trip_id => {
return dispatch => {
dispatch(dataIsLoading(true));
axios.get(`get_current_trip?trip_id=${trip_id}`)
.then((response) => {
if (response.status !== 200) {
throw Error(response.statusText);
}
if (response.data.trip.o_packing_list) {
response.data.trip.o_packing_list.forEach((item, index) => {
item.id = index;
});
}
dispatch(currentTripData(response));
dispatch(dataIsLoading(false));
})
.catch((err) => console.log(err));
}
};
export const tripDataDelete = trip_id => {
return () => {
axios.post(`delete?trip_id=${trip_id}`)
.then((response) => {
if (response.status !== 200) {
throw Error(response.statusText);
}
})
.catch(() => console.log("tripDataDelete error"));
}
};
export const onLogout = () => {
return dispatch => {
dispatch({ type: 'USER_LOGGED_OUT' });
};
};