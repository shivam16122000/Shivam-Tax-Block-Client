import React, { useState } from 'react';
import Header from './components/Header';
import theme from './components/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import ViewAll from './components/ViewAll';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
    const token = localStorage.getItem('token');
    let initialLoginValue;
    if (token && token.length > 2) {
        //Handle Login Status after Refresh based on JWT token presence
        initialLoginValue = true;
    } else {
        initialLoginValue = false;
    }
    const [login, setLogin] = useState(initialLoginValue); // Provide current login Status (true || false)
    const [value, setValue] = useState(0); // used to manage tab switching in Header
    const handleLogin = (value) => {
        setLogin(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                {/* Header Component for the Project ,consist of appbar and tabs*/}
                <Header
                    login={login}
                    handleLogin={handleLogin}
                    value={value}
                    setValue={setValue}
                />

                {/* Home route for Loan form ,consist of logic and UI */}
                <Route
                    exact
                    path="/"
                    render={(props) => (
                        <Main
                            {...props}
                            login={login}
                            handleLogin={handleLogin}
                            value={value}
                            setValue={setValue}
                        />
                    )}
                />
                {/* Route for Sign-Up page, consist of logic and UI */}
                <Route
                    exact
                    path="/signup"
                    render={(props) => (
                        <Signup
                            {...props}
                            login={login}
                            handleLogin={handleLogin}
                            value={value}
                            setValue={setValue}
                        />
                    )}
                />
                {/* Route for View All loan forms filled by login user */}
                <Route exact path="/view" component={ViewAll} />
                {/* Route for Login Page, Handle logic and UI for login */}
                <Route
                    exact
                    path="/login"
                    render={(props) => (
                        <Login
                            {...props}
                            login={login}
                            handleLogin={handleLogin}
                            value={value}
                            setValue={setValue}
                        />
                    )}
                />
            </Router>
        </ThemeProvider>
    );
}

export default App;
