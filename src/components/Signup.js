import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Main.css';
import { useHistory } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100vw',
        margin: 0
    },
    formItem: {
        margin: '1.5rem 3rem',
        width: '80%',
        [theme.breakpoints.down('xs')]: {
            margin: '1.5rem 1rem'
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
        borderRadius: '1rem'
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
        margin: '1rem 3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            marginRight: '1rem',
            marginLeft: '1rem'
        }
    }
}));

function Signup(props) {
    const classes = useStyles();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState(''); //Error message during SignUp

    const onUserNameChange = (e) => {
        setUsername(e.target.value);
    };

    const onNameChange = (e) => {
        setName(e.target.value);
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
                name: name,
                password: password
            })
        };

        fetch(
            'https://blooming-journey-42211.herokuapp.com/api/signup',
            requestOptions
        )
            .then((response) => response.json())
            .then((response) => {
                if (response.message.errors !== undefined) {
                    setSignupError(response.message.errors[0].msg);
                } else if (response.message === 'email taken') {
                    setSignupError('Email Taken !');
                } else {
                    history.push('/login');
                    props.setValue(2);
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
                        Sign Up Form
                    </Typography>
                    <Typography className={classes.errorHeading} variant="h2">
                        {signupError}
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
                                <label htmlFor="name">
                                    <Typography>UserName</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={onNameChange}
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
                                    Sign-in
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default Signup;
