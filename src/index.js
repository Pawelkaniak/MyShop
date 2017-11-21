import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

//const scss = require('./index.scss');

/*const App = () => (
    <div className={scss.body}>
        <h1>Testujemy</h1>
        <p>Testujemy kolory1</p>
        <p>Testujemy kolory2</p>
    </div>
);
*/

ReactDOM.render(<App />,
    document.getElementById('root')
);
