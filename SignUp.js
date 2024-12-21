const styles = theme => ({
paper: { marginTop: theme.spacing(8), display: 'flex',
flexDirection: 'column', alignItems: 'center',
},
avatar: { margin: theme.spacing(1), backgroundColor:
theme.palette.secondary.main,
},
form: { width: '100%', marginTop: theme.spacing(3), },
submit: {
margin: theme.spacing(3, 0, 2),
},
});
class SignUp extends Component {
state = { firstName: "", lastName: "", email: "",
password: "", errorText: "",
};
isValidEmail = email => {
let regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-
]+)*\.[a-z]+$/;
if (email.length < 6) return "Слишком короткий email";
if (email.length > 40) return "Слишком длинный email";
if (!regEmail.test(email))return "Неверный формат email";
return "";
};
handleChangeEmail = event => {
this.setState({ [event.target.name]: event.target.value });
this.state.errorText = this.isValidEmail(event.target.value);
};
handleChange = event => {
this.setState({ [event.target.name]: event.target.value });
};
handleSubmit = event => { event.preventDefault();
this.props.userPostFetch(this.state)
};
render() {
const {classes} = this.props;
if (this.props.token)
return (<Redirect to='/'/>);
return (
<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
Зарегистрироваться
</Typography>
<form className={classes.form} noValidate
onSubmit={this.handleSubmit}>
<Grid container spacing={2}>
<Grid item xs={12} sm={6}>
<TextField
autoComplete="fname" name="firstName"
72
variant="outlined" required fullWidth
id="firstName" label="Имя" autoFocus
value={this.state.firstName}
onChange={this.handleChange}
/>
</Grid>
<Grid item xs={12} sm={6}>
<TextField
variant="outlined" required fullWidth
id="lastName" label="Фамилия" name="lastName"
autoComplete="lname"
value={this.state.lastName}
onChange={this.handleChange}
/>
</Grid>
<Grid item xs={12}>
<TextField
error={this.state.errorText.length !== 0 }
helperText={this.state.errorText}
variant="outlined" required fullWidth
id="email" label="Почта" name="email"
autoComplete="email"
value={this.state.email}
onChange={this.handleChangeEmail}
/>
</Grid>
<Grid item xs={12}>
<TextField
variant="outlined" required fullWidth
type="password"
id="password" name="password" label="Пароль"
autoComplete="current-password"
value={this.state.password}
onChange={this.handleChange}
/>
</Grid>
</Grid>
<Button
disabled={ (this.state.errorText.length !== 0 ||
this.state.email.length === 0) }
type="submit"
fullWidth
variant="contained"
color="primary"
className={classes.submit}
>
Зарегистрироваться
</Button>
<Grid container>
<Grid item>
<Link component={LinkRouter} to="/auth" variant="body2">
Уже есть аккаунт? Войти
</Link>
</Grid>
</Grid>
</form>
</div>
</Container>
);
}
}
SignUp.propTypes = {
classes: PropTypes.object.isRequired,
73
};
const mapStateToProps = (state) => {
return {
token: state.token,
};
};
const mapDispatchToProps = dispatch => ({
userPostFetch: userInfo => dispatch(actions(userInfo))
});
export default connect(mapStateToProps,
mapDispatchToProps)(withStyles(styles)(SignUp));