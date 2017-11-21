import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './main/Main';
import Test from './main/test';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={Main}/>
                    <Route path="/about" component={Test} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

