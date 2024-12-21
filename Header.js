const styles = theme => ({
root: { flexGrow: 1, marginTop: 20, },
title: { flexGrow: 1, },
});
class Header extends Component {
state = { anchorEl: undefined, open: false, };
handleMenu = event => {
this.setState({ open: true, anchorEl: event.currentTarget });
};
handleProfile = () => {
console.log("profile");
this.setState({ open: false });
};
handleClose = () => {
console.log("close");
this.setState({ open: false });
};
handleExit = (event) => {
this.setState({ open: false, anchorEl: null });
event.preventDefault();
localStorage.removeItem("token");
this.props.logoutUser();
};
render() {
const {classes} = this.props;
return (
<AppBar position="sticky">
<Toolbar>
<Typography variant="h6" className={classes.title}>
Планирование путешествий
</Typography>
{this.props.token && (
<div>
<IconButton
aria-label="account of current user" color="inherit"
aria-controls="menu-appbar" aria-haspopup="true"
onClick={this.handleMenu}
>
<AccountCircle/>
</IconButton>
<Menu
id="menu-appbar"
anchorEl={this.state.anchorEl}
anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
keepMounted
transformOrigin={{ vertical: 'top', horizontal: 'right', }}
open={this.state.open}
onClose={this.handleClose}
>
<MenuItem onClick={this.handleProfile}>Profile</MenuItem>
81
<MenuItem onClick={this.handleExit}>Exit</MenuItem>
</Menu>
</div>
)}
{!this.props.token && (
<div>
<Button color='inherit' component={Link}
to='/auth'>Вход</Button>
<Button color='inherit' component={Link}
to='/register'>Регистрация</Button>
</div>
)}
</Toolbar>
</AppBar>
);
}
}
Header.propTypes = { classes: PropTypes.object.isRequired,};
const mapStateToProps = state => ({ token: state.token,});
const mapDispatchToProps = dispatch => ({
logoutUser: () => dispatch(onLogout()),
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(Header));