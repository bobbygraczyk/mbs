import React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
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
        );
    }
}

export default withRouter(Nav);