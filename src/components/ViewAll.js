import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../features/main/mainSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    rootDiv: {
        overflowX: 'hidden'
    },
    root: {
        width: '50vw',
        border: '0.5px solid grey',
        borderRadius: '1rem',
        padding: '0.8rem',
        marginTop: '1rem',

        overflowWrap: 'break-word',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '0.0rem'
        }
    },
    grandChild: {
        margin: '0.5rem 0',
        overflowWrap: 'break-word'
    },
    head: {
        marginTop: '3rem',
        textAlign: 'center'
    }
}));

function ViewAll() {
    const classes = useStyles();
    const formList = useSelector((state) => state.main.post);
    const noOfLoans = formList.length;
    const dispatch = useDispatch();
    const username = (
        <Typography variant="h3" className={classes.head}>
            Welcome {localStorage.getItem('username')} !
        </Typography>
    );
    const loanCount = (
        <Typography variant="h5" className={classes.head}>
            You Have {noOfLoans} Loan
        </Typography>
    );
    console.log('formist is below');
    const [loading, setLoading] = useState(
        <Typography variant="h3" className={classes.head}>
            ... Loading
        </Typography>
    );
    console.log(formList);

    const display = formList.map((item, id) => (
        <Grid item>
            <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.root}
            >
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">Name :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{item.name}</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">Address :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{item.address}</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">E-mail :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{item.email}</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">Loan Amount :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{item.loanAmount} Rs</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">Loan Start Date :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {moment(item.startDate).format('MMMM Do YYYY')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">Loan Expiry Date :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {moment(item.expiryDate).format('MMMM Do YYYY')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    className={classes.grandChild}
                >
                    <Grid item>
                        <Typography variant="h6">EMI :</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{item.monthlyInstallment} Rs</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ));

    // Data fetching after refresh
    useEffect(() => {
        if (
            localStorage.getItem('token') &&
            localStorage.getItem('token').length > 2
        ) {
            const userId = localStorage.getItem('userId');
            dispatch(fetchUsers(userId));
        }
    }, [dispatch]);

    return (
        <div className={classes.rootDiv}>
            <div>{formList.length === 0 ? loading : username}</div>
            <div>{formList.length === 0 ? undefined : loanCount}</div>
            <Grid container direction="column" alignItems="center" spacing={9}>
                {formList.length === 0 ? loading : display}
            </Grid>
        </div>
    );
}

export default ViewAll;
