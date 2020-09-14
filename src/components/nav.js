import React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div class="nav-wrapper">
                <div class="frame">
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                </div>
            </div>
            
            
        );
    }
}

export default withRouter(Nav);