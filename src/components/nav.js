import React from 'react'
import Contact from './contact'
import {
    NavLink,
    withRouter
} from "react-router-dom";
import Icons from '../components/icons';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.nav = React.createRef();
        //make this a component
        this.navButtons = (
            <React.Fragment>
                <NavLink className="nav-link" to='/' exact activeStyle={{borderBottom: '4px solid #8566AA'}} onClick={() => this.toggleMobileMenu()}>Home</NavLink>
                <NavLink className="nav-link" to='/about' activeStyle={{borderBottom: '4px solid #8566AA'}} onClick={() => this.toggleMobileMenu()}>About</NavLink>
                <NavLink className="nav-link" to='/services' activeStyle={{borderBottom: '4px solid #8566AA'}} onClick={() => this.toggleMobileMenu()}>Services</NavLink>
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
                                <Icons name="logo" />
                            </div>
                            <div className="svg-cont main-logo">
                                <Icons name="main-logo" />
                            </div>
                            <NavLink className="contact-button" to="/contact">Contact Us</NavLink>
                            <div className="svg-cont nav-fb">
                                <Icons name="fb" />
                            </div>
                        </div>
                        <div ref={this.nav} className="mobile mobile-menu">
                            <button className="mobile" onClick={() => {this.toggleMobileMenu()}}>X</button>
                            {this.navButtons}
                        </div>
                        <div className="nav-links desktop">
                            <div className="svg-cont main-logo">
                                <Icons name="main-logo" />
                            </div>
                            {this.navButtons}
                            <a href="/">
                                <div className="svg-cont nav-fb">
                                    <Icons name="fb" />
                                </div>
                                <NavLink className="contact-button" to="/contact">Contact Us</NavLink>
                            </a>
                            <Contact />
                        </div>
                    </nav>
            </div>
        );
    }
}

export default withRouter(Nav);