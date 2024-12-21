const styles = theme => ({
root: { flexGrow: 1, },
title: { flexGrow: 1, },
});
class MainPage extends Component {
componentDidMount() {
if (this.props.token) {
if (this.props.match) {
this.props.currentTripDataGet(this.props.match.params.id);
this.props.idChange(this.props.match.params.id);
} else this.props.idChange(0);
}
}
render() {
const {classes} = this.props;
if (this.props.dataIsLoading)
return (
<div className={classes.root}> <Header/> </div>
);
return (
<div className={classes.root}>
<Header/> <TripCard history={this.props.history} />
</div>
);
}
}
MainPage.propTypes = {
classes: PropTypes.object.isRequired,
open: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
token: state.token,
dataIsLoading: state.tripsForm.dataIsLoading,
currentTripData: state.tripsForm.currentTripData,
});
const mapDispatchToProps = dispatch => ({
82
idChange: id => dispatch(tripId(id)),
currentTripDataGet: tripId => dispatch(currentTripDataGet(tripId)),
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(MainPage));