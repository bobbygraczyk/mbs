import React from 'react';
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
                    <div className="col-50">
                        <h2>It's time to get healthy</h2>
                    </div>
                    <div className="col-50">
                        <Button icon="info" label="Learn More" />
                        <Button icon="info" label="Request an Appointment" />
                    </div>
                </div>
            </div>
        )
    }
}

export default CallToAction;