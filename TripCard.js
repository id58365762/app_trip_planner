const styles = theme => ({
root: { flexGrow: 1, },
paper: { padding: theme.spacing(2), textAlign: 'center',
color: theme.palette.text.secondary,
},
});
class TripCard extends Component {
handleSubmit = event => {
event.preventDefault();
this.props.userLoginFetch(this.state)
};
render() {
const {classes} = this.props;
return (
<div className={classes.root}>
<Container fixed>
<Grid container justify="center" alignItems="stretch"
spacing={3}
>
<Grid item xs={12}> <Box mt={2}> <WhenCard /> </Box> </Grid>
<Grid item xs={12}> <WhereCard /> </Grid>
<Grid item xs={12}> <WhyCard /> </Grid>
<Grid item xs={12}> <PackingListCard/> </Grid>
<Grid item xs={12}> <ShoppingCardList/> </Grid>
<Grid item xs={12}>
80
<ShareButtons history={this.props.history}/>
</Grid>
</Grid>
</Container>
</div>
);
}
}
export default (withStyles(styles)(TripCard));