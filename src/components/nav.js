import React from 'react';
import {
    NavLink,
    withRouter
} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        this.state = {
            navOpen: false
        }
    }
    toggleMobileMenu() {
        if (this.state.navOpen) {
            this.nav.current.style.left = "-100vw";
        } else {
            this.nav.current.style.left = "0vw";
        }
        this.setState({ navOpen: !this.state.navOpen });
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="frame">
                    <nav>
                        <div className="nav-open mobile" onClick={() => this.toggleMobileMenu()}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-menu-button-wide" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13zM14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"/>
                            <path fillRule="evenodd" d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                            <path d="M12.823 2.823l-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0z"/>
                            </svg>
                        </div>
                        <div ref={this.nav} className="nav-links" onClick={() => this.toggleMobileMenu()}>
                            <NavLink to='/home' activeStyle={{ color: '#8566AA' }}>Home</NavLink>
                            <NavLink to='/about' activeStyle={{ color: '#8566AA' }}>About</NavLink>
                            <a class="mobile" onClick={() => this.toggleMobileMenu()}>Close</a>
                        </div>
                    </nav>
                </div>
            </div>
            
            
        );
    }
}

export default withRouter(Nav);