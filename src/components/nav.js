import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </Router>
        );
    }
}

export default Nav;