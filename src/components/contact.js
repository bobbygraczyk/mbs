import React from 'react';
import Icons from '../components/icons';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="svg-cont phone">
                    <Icons name="phone" />
                </div>
                <a href="tel:2342814996" id="phone">(234) 281-4996</a>
                <a href="mailto:drstacey@mbschiro2go.com" id="email">drstacey@<br />mbschiro2go.com</a>
                <div className="svg-cont email">
                    <Icons name="email" />
                </div>
            </div>
        );
    }
}

export default Contact;