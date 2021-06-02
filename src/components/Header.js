import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector } from 'react-redux';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { onLogout } from '../features/main/mainSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// function imported from Material UI for Animation effects after Scrolling Below header
function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

// Inline style of Material UI
const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    tabContainer: {
        width: '100vw',
        margin: '0.3rem',

        [theme.breakpoints.down('xs')]: {
            width: '90vw',
            marginLeft: '0.8rem'
        }
    },
    tabHome: {
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: '1rem',
        minWidth: 10,
        marginRight: 'auto',

        textTransform: 'none'
    },
    tab: {
        fontFamily: 'Raleway',
        fontWeight: 700,
        fontSize: '1rem',
        minWidth: 5,
        marginLeft: '15px',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0px'
        },
        textTransform: 'none'
    }
}));

function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const history = useHistory();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    const handleLogout = () => {
        props.handleLogin(false);
        fetch('https://blooming-journey-42211.herokuapp.com/api/logout')
            .then((response) => response.json())
            .then((response) => {
                console.log(response.message);
                localStorage.setItem('token', '');
                localStorage.setItem('userId', '');
                localStorage.setItem('username', '');
                dispatch(onLogout());
                history.push('/');
                props.setValue(0);
            })
            .catch((err) => console.log('error occured in logout'));
    };
    const loginTab = (
        <Tab
            className={classes.tab}
            component={Link}
            to="/login"
            label="Log-In"
        />
    );

    const logoutTab = (
        <Tab className={classes.tab} onClick={handleLogout} label="Log-Out" />
    );

    const signupTab = (
        <Tab
            className={classes.tab}
            component={Link}
            to="/signup"
            label="Sign-Up"
        />
    );

    const ViewAllTab = (
        <Tab
            className={classes.tab}
            label={matches ? 'Loans' : 'All Loans'}
            component={Link}
            to="/view"
        />
    );

    //Manages Active Tab logic after refresh
    useEffect(() => {
        if (
            window.location.href ===
                'https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/' &&
            props.value != 0
        ) {
            props.setValue(0);
        } else if (
            window.location.href ===
                'https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/signup' &&
            props.value != 1
        ) {
            props.setValue(1);
        } else if (
            window.location.href ===
                'https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/login' &&
            props.value != 2
        ) {
            props.setValue(2);
        } else if (
            window.location.href ===
                'https://shivam16122000.github.io/Shivam-Tax-Block-Client/#/view' &&
            props.value != 1
        ) {
            props.setValue(1);
        }
    }, [props.value, props]);

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Tabs
                            className={classes.tabContainer}
                            onChange={handleChange}
                            value={props.value}
                            indicatorColor="primary"
                        >
                            <Tab
                                className={classes.tabHome}
                                component={Link}
                                to="/"
                                label={'Tax-Block'}
                            />

                            {props.login ? ViewAllTab : signupTab}
                            {props.login ? logoutTab : loginTab}
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />{' '}
            {/* Used to push down content from Header by Margin Botton */}
        </React.Fragment>
    );
}

export default Header;
