const styles = theme => ({
paper: { marginTop: theme.spacing(8), display: 'flex', flexDirection:
'column', alignItems: 'center', },
avatar: { margin: theme.spacing(1), backgroundColor:
theme.palette.secondary.main,
},
form: { width: '100%', marginTop: theme.spacing(1), },
submit: { margin: theme.spacing(3, 0, 2), },
});
class SignIn extends Component {
state = { email: "", password: "", errorText: "", };
isValidEmail = email => {
let regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-
]+)*\.[a-z]+$/;
if (email.length < 6) return "Слишком короткий email";
if (email.length > 40) return "Слишком длинный email";
if (!regEmail.test(email)) return "Неверный формат email";
return "";
};
handleChangeEmail = event => {
this.setState({
[event.target.name]: event.target.value
});
this.state.errorText = this.isValidEmail(event.target.value);
};
handleChangePassword = event => {
this.setState({
[event.target.name]: event.target.value
});
};
handleSubmit = event => {
event.preventDefault();
this.props.userLoginFetch(this.state);
70
};
render() {
const {classes} = this.props;
if (this.props.token)
return (<Redirect to='/trips'/>);
return (
<Container component="main" maxWidth="xs">
<CssBaseline/>
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon/>
</Avatar>
<Typography component="h1" variant="h5">
Войти
</Typography>
<form className={classes.form} noValidate
onSubmit={this.handleSubmit}>
<TextField
error={this.state.errorText.length !== 0 }
helperText={this.state.errorText}
variant="outlined" margin="normal" required fullWidth
id="email" label="Почта" name="email" autoComplete="email"
autoFocus value={this.state.email}
onChange={this.handleChangeEmail}
/>
<TextField
variant="outlined" margin="normal" required fullWidth
name="password" label="Пароль" type="password" id="password"
autoComplete="current-password" value={this.state.password}
onChange={this.handleChangePassword}
/>
<FormControlLabel
control={<Checkbox value="remember" color="primary"/>}
label="Запомнить меня"
/>
<Button
disabled={ this.state.errorText.length !== 0 ||
this.state.email.length === 0 }
type="submit" fullWidth variant="contained" color="primary"
className={classes.submit}
>
Войти
</Button>
<Grid container>
<Grid item xs>
<Link component={LinkRouter} to="/register" variant="body2">
{"Нет аккаунта? Зарегистрироваться"}
</Link>
</Grid>
</Grid>
</form>
</div>
</Container>
);
}
}
SignIn.propTypes = {
classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
return {
token: state.token,
};
71
};
const mapDispatchToProps = dispatch => ({
userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(SignIn));
