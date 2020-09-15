import React from 'react'
import logo from '../img/mbs-logo.svg'
import Contact from './contact'
import {
    NavLink,
    withRouter
} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        //make this a component
        this.navButtons = (
            <React.Fragment>
                <NavLink className="nav-link" to='/home' activeStyle={{borderBottom: '4px solid #8566AA'}}>Home</NavLink>
                <NavLink className="nav-link" to='/about' activeStyle={{borderBottom: '4px solid #8566AA'}}>About</NavLink>
            </React.Fragment>
        );
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
                    <nav>
                        <div className="mobile mobile-nav">
                            <div className="nav-open" onClick={() => this.toggleMobileMenu()}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-menu-button-wide" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13zM14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"/>
                                    <path fillRule="evenodd" d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-10a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                                    <path d="M12.823 2.823l-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0z"/>
                                </svg>
                            </div>
                            <div className="svg-cont">
                                <img id="main-logo" src={logo} alt="Mind Body and Soul Logo" />
                            </div>
                        </div>
                        <div ref={this.nav} className="mobile mobile-menu">
                            <button className="mobile" onClick={() => {this.toggleMobileMenu()}}>X</button>
                            {this.navButtons}
                        </div>
                        <div className="nav-links desktop">
                            <div className="svg-cont">
                                <img src={logo} alt="Mind Body and Soul Logo" />
                            </div>
                            {this.navButtons}
                            <a href="/">
                                <div className="svg-cont nav-fb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                                </div>
                            </a>
                            <Contact />
                        </div>
                    </nav>
            </div>
        );
    }
}

export default withRouter(Nav);