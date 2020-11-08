import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route
                    exact path="/home" component={HomeScreen} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Router>
    );
}

