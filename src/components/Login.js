import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Main.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchUsers } from '../features/main/mainSlice';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100vw',
        margin: 0,
        overflowX: 'hidden'
    },
    formItem: {
        margin: '1.5rem 3rem',
        width: '80%',
        [theme.breakpoints.down('xs')]: {
            margin: '1rem 1rem'
        }
    },
    input: {
        padding: '0.8rem 1rem',
        margin: '0.5rem 0',
        width: '70vw',
        border: '1px solid orange',
        borderRadius: '0.5rem'
    },
    mainGrid: {},
    submit: {
        width: '9rem',
        marginTop: '1rem',
        padding: '0.6rem 1rem',
        border: '1px solid orange',
        marginBottom: '1rem',
        borderRadius: '0.5rem'
    },
    formHeading: {
        marginTop: '2rem',
        marginBottom: '0rem',
        marginRight: '3rem',
        marginLeft: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
            marginTop: '2rem',
            marginBottom: '0rem',
            marginRight: '1rem',
            marginLeft: '1rem'
        }
    },
    errorHeading: {
        color: 'red',
        fontSize: '1rem',
        margin: '1rem 3rem'
    }
}));

function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [loginError, setLoginError] = useState(''); //Sets error message during login

    const onUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        };

        fetch(
            'https://blooming-journey-42211.herokuapp.com/api/login',
            requestOptions
        )
            .then((response) => response.json())
            .then((response) => {
                if (response.user !== false) {
                    const token = response.token;
                    const userId = response.user._id;
                    const username = response.user.name;
                    localStorage.setItem('username', username);
                    localStorage.setItem('token', token);
                    localStorage.setItem('userId', userId);
                    props.handleLogin(true);
                    const userIde = localStorage.getItem('userId');
                    dispatch(fetchUsers(userIde));
                    history.push('/');
                    props.handleValue(0);
                } else {
                    setLoginError('Wrong Credentials !');
                }
            })
            .catch((err) => console.log('error occured'));
    };

    return (
        <div className={classes.main}>
            <Grid
                container
                direction="column"
                spacing={3}
                className={classes.mainGrid}
            >
                <Grid item>
                    <Typography className={classes.formHeading} variant="h2">
                        Login Form
                    </Typography>

                    <Typography className={classes.errorHeading} variant="h2">
                        {loginError}
                    </Typography>
                </Grid>

                <Grid item>
                    <form onSubmit={onFormSubmit}>
                        <Grid
                            container
                            direction="column"
                            className={classes.formItem}
                        >
                            <Grid item>
                                <label htmlFor="username">
                                    <Typography>Email</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="username"
                                    type="email"
                                    name="username"
                                    value={username}
                                    onChange={onUserNameChange}
                                    required
                                    className={classes.input}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="column"
                            className={classes.formItem}
                        >
                            <Grid item>
                                <label htmlFor="password">
                                    <Typography>Password</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onPasswordChange}
                                    required
                                    className={classes.input}
                                />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="column"
                            className={classes.formItem}
                        >
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Log-in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
