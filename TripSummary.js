const styles = theme => ({ root: { flexGrow: 1, },
paper: { padding: theme.spacing(2), textAlign: 'center',
color: theme.palette.text.secondary,
},
typographySecondary: { textAlign: 'left', },
typography: { fontSize: 20, textAlign: 'left', },
});
class TripSummary extends Component {
handleDelete = event => {
event.preventDefault();
this.props.deleteTrip(this.props.trip.id);
this.props.tripDataGet();
};
render() {
let trip = this.props.trip;
const {classes} = this.props;
return (
<Paper className={classes.paper}>
<Grid container direction="row"
justify="space-between" alignItems="flex-start"
>
<Box ml={2}>
<Grid container direction="row"
justify="flex-start" alignItems="flex-start"
>
<Box width={150}>
<Grid item>
<Typography className={classes.typographySecondary}>
Туда
</Typography>
<Box color="text.primary">
<Typography className={classes.typography}>
{trip.date_from.substring(0, 10)}
</Typography>
</Box>
</Grid>
</Box>
<Box ml={2} width={150}>
<Grid item>
<Typography className={classes.typographySecondary}>
Оттуда
</Typography>
<Box color="text.primary">
<Typography className={classes.typography}>
{trip.date_to.substring(0, 10)}
</Typography>
</Box>
</Grid>
</Box>
<Box ml={2} width={150}>
<Grid item>
<Typography className={classes.typographySecondary}>
Куда
</Typography>
<Box color="text.primary">
83
<Typography className={classes.typography}>
{trip.place}
</Typography>
</Box>
</Grid>
</Box>
<Box ml={2} width={150}>
<Grid item>
<Typography className={classes.typographySecondary}>
Зачем
</Typography>
<Box color="text.primary">
<Typography className={classes.typography}>
{trip.purpose}
</Typography>
</Box>
</Grid>
</Box>
</Grid>
</Box>
<Box mr={2} >
<IconButton
aria-label="delete"
onClick={this.handleDelete}
>
<DeleteSharpIcon/>
</IconButton>
</Box>
</Grid>
</Paper>
);
}
}
const mapStateToProps = state => ({ token: state.token, });
const mapDispatchToProps = dispatch => ({
deleteTrip: trip_id => dispatch(tripDataDelete(trip_id)),
tripDataGet: () => dispatch(tripDataGet()),
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(TripSummary));