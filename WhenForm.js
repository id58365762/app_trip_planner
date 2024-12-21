const styles = theme => ({ root: { flexGrow: 1, },
paper: { padding: theme.spacing(2), textAlign: 'left',
color: theme.palette.text.secondary,
},
fontSize: 15,
'& > span': { marginRight: 10, fontSize: 18, },
typography: { fontSize: 20, },
});
class WhenForm extends Component {
componentDidMount() {
if (this.props.token) {
if (this.props.currentTripData) {
this.props.dateFromChange(this.props.currentTripData.trip.o_trip.date_from.su
bstring(0, 10));
this.props.dateToChange(this.props.currentTripData.trip.o_trip.date_to.substr
ing(0, 10));
}
}
}
handleDateChangeFrom = (date) => {
this.props.dateFromChange(date);
};
handleDateChangeTo = (date) => {
this.props.dateToChange(date);
};
render() {
const {classes} = this.props;
return (
<Paper className={classes.paper}>
<Typography className={classes.typography}>
Когда
<MuiPickersUtilsProvider utils={DateFnsUtils}>
<Grid container justify="flex-start" alignItems="flex-start">
<Box>
<KeyboardDatePicker
style={{ width: 300 }} disableToolbar variant="inline"
format="dd/MM/yyyy" margin="normal"
id="date-picker-inline-from" label="Туда"
value={this.props.dateFrom}
onChange={this.handleDateChangeFrom}
KeyboardButtonProps={{ 'aria-label': 'change date', }}
/>
</Box>
<Box ml={10}>
<KeyboardDatePicker
style={{ width: 300 }} disableToolbar variant="inline"
format="dd/MM/yyyy" margin="normal"
74
id="date-picker-inline-to" label="Обратно"
value={this.props.dateTo}
onChange={this.handleDateChangeTo}
KeyboardButtonProps={{
'aria-label': 'change date',
}}
/>
</Box>
</Grid>
</MuiPickersUtilsProvider>
</Typography>
</Paper>
)
}
}
const mapStateToProps = state => ({
token: state.token,
dateFrom: state.mainForm.tripDates.dateFrom,
dateTo: state.mainForm.tripDates.dateTo,
currentTripData: state.tripsForm.currentTripData.data,
});
const mapDispatchToProps = dispatch => ({
dateFromChange: dateFrom => dispatch(tripDateFrom(dateFrom)),
dateToChange: dateTo => dispatch(tripDateTo(dateTo)),
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(WhenForm));