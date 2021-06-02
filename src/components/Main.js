import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Main.css';
import { useSelector } from 'react-redux';

import { fetchUsers } from '../features/main/mainSlice';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/* Styling in Material UI inline Styles */
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
        borderRadius: '0.5rem',
        marginBottom: '1rem'
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

function Main(props) {
    const classes = useStyles();
    const history = useHistory();
    const [formError, setformError] = useState('');
    const formList = useSelector((state) => state.main.post);
    const dispatch = useDispatch();

    const [personName, setPersonName] = useState('');
    const [personAddress, setPersonAddress] = useState('');
    const [email, setEmail] = useState('');
    const [loanAmount, setLoanAmount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

    const [expiryDate, setExpiryDate] = useState(new Date());
    const [monthlyInstallments, setMonthlyInstallments] = useState(0);
    const [miniInstallment, setMiniInstallment] = useState(0);

    const onNameChange = (e) => {
        setPersonName(e.target.value);
    };

    const onExpiryDate = (date) => {
        setExpiryDate(date);
    };

    const onMonthlyInstallments = (e) => {
        setMonthlyInstallments(e.target.value);
    };

    const onAddressChange = (e) => {
        setPersonAddress(e.target.value);
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onLoanAmountChange = (e) => {
        setLoanAmount(e.target.value);
    };

    const onStartDate = (date) => {
        setStartDate(date);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: localStorage.getItem('userId'),
                name: personName,
                address: personAddress,
                email: email,
                loanAmount: loanAmount,
                startDate: startDate,
                expiryDate: expiryDate,
                monthlyInstallments: monthlyInstallments
            })
        };

        fetch(
            'https://blooming-journey-42211.herokuapp.com/api/postloandata',
            requestOptions
        )
            .then((response) => response.json())
            .then((response) => {
                if (response.message.errors !== undefined) {
                    setformError(response.message.errors[0].msg);
                } else {
                    console.log(response.message);
                    const userId = localStorage.getItem('userId');
                    dispatch(fetchUsers(userId));
                    console.log(`after dispatching formlist is ${formList}`);
                    setPersonName('');
                    setPersonAddress('');
                    setEmail('');
                    setLoanAmount(0);
                    setStartDate(new Date());
                    setExpiryDate(new Date());
                    setMonthlyInstallments(0);
                    history.push('/view');
                    props.setValue(1);
                }
            })
            .catch((err) => console.log('error occured'));
    };

    //Data fetching after refresh logic,based on available token.
    useEffect(() => {
        if (
            localStorage.getItem('token') &&
            localStorage.getItem('token').length > 2
        ) {
            const userId = localStorage.getItem('userId');
            dispatch(fetchUsers(userId));
        }
    }, [dispatch]);

    //Manages date logic and calculates Static EMI based on formula (Emi = (expiryDate - startDate)/loanAmount )
    useEffect(() => {
        if (new Date(startDate).getTime() > new Date(expiryDate).getTime()) {
            setExpiryDate(startDate);
        }

        const diffTime = Math.abs(expiryDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let months = Math.ceil(diffDays / 30);

        if (months < 2) {
            setMiniInstallment(loanAmount);
        } else {
            setMiniInstallment(Math.ceil(loanAmount / months));
        }
        setMonthlyInstallments(miniInstallment);
    }, [
        startDate,
        expiryDate,
        loanAmount,
        miniInstallment,
        monthlyInstallments
    ]);

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
                        Loan Application Form
                    </Typography>
                    <Typography className={classes.errorHeading} variant="h2">
                        {formError}
                    </Typography>
                </Grid>

                <Grid item className={classes.box}>
                    <form onSubmit={onFormSubmit}>
                        <Grid
                            container
                            direction="column"
                            className={classes.formItem}
                        >
                            <Grid item>
                                <label htmlFor="name">
                                    <Typography>Full Name</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={personName}
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
                                <label htmlFor="address">
                                    <Typography>Address</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={personAddress}
                                    onChange={onAddressChange}
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
                                <label htmlFor="email">
                                    <Typography>E-mail</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onEmailChange}
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
                                <label htmlFor="loan">
                                    <Typography>Loan Amount (Rupee)</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="loan"
                                    type="number"
                                    name="loan"
                                    min="0"
                                    value={loanAmount}
                                    onChange={onLoanAmountChange}
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
                                <label htmlFor="loanstartdate">
                                    <Typography>Loan Start Date</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <DatePicker
                                    selected={startDate}
                                    startDate={startDate}
                                    onChange={onStartDate}
                                    className={classes.input}
                                    minDate={startDate}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            className={classes.formItem}
                        >
                            <Grid item>
                                <label htmlFor="loanexpirydate">
                                    <Typography>Loan Expiry Date</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <DatePicker
                                    selected={expiryDate}
                                    startDate={startDate}
                                    onChange={onExpiryDate}
                                    className={classes.input}
                                    minDate={startDate}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            className={classes.formItem}
                        >
                            <Grid item>
                                <label htmlFor="emi">
                                    <Typography>EMI (Rupee)</Typography>
                                </label>
                            </Grid>
                            <Grid item>
                                <input
                                    id="emi"
                                    type="number"
                                    name="emi"
                                    step="100"
                                    min={`${miniInstallment}`}
                                    max={`${loanAmount}`}
                                    value={monthlyInstallments}
                                    onChange={onMonthlyInstallments}
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
                                    disabled={props.login ? false : true}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default Main;
