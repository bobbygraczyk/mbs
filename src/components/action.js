import React from 'react';
import {
    NavLink,
    withRouter
} from "react-router-dom";
import Button from './button';


class CallToAction extends React.Component {
    constructor(props) {
        super(props);
        this.page = "home";
    }
    render() {
        return(
            <div className="call-wrapper">
                <div className="frame">
                    <div className="col-50 text">
                        <h2>It's time to get healthy</h2>
                    </div>
                    <div className="col-50 buttons">
                    <NavLink to="/services">
                        <Button icon="info" label="Learn More" />
                    </NavLink>
                    <NavLink to="/contact">
                        <Button id="two" icon="info" label="Request an Appointment" />
                    </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CallToAction);