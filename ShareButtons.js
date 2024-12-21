const styles = theme => ({
root: { flexGrow: 1, },
paper: { padding: theme.spacing(2), textAlign: 'center',
color: theme.palette.text.secondary,
},
});
class ShareButtons extends Component {
handleSave = () => {
console.log(this.props.tripInfo);
this.props.tripDataSend(this.props.tripInfo);
this.props.history.push('/trips');
};
handlePrint = () => { console.log("print") };
handleEmail = () => { console.log("email") };
render() {
const {classes} = this.props;
return (
<Grid container justify="space-around" >
<Paper className={classes.paper} elevation={0}>
{this.props.token && (
<IconButton
79
aria-label="save trip" aria-controls="menu-appbar"
aria-haspopup="true" onClick={this.handleSave}
>
<Fab color="primary"> <SaveSharpIcon /> </Fab>
</IconButton>
)}
<IconButton
aria-label="save trip" aria-controls="menu-appbar"
aria-haspopup="true"
onClick={this.handlePrint}
>
<Fab color="primary"> <PrintSharpIcon /> </Fab>
</IconButton>
<IconButton
aria-label="save trip" aria-controls="menu-appbar"
aria-haspopup="true"
onClick={this.handleEmail}
>
<Fab color="primary"> <EmailSharpIcon /> </Fab>
</IconButton>
</Paper>
</Grid>
);
}
}
const mapStateToProps = state => ({
token: state.token,
tripInfo: state.mainForm,
});
const mapDispatchToProps = dispatch => ({
tripDataSend: tripInfo => dispatch(tripDataSend(tripInfo))
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(ShareButtons));