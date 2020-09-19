import React from 'react';
import Icons from '../components/icons';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="svg-cont phone">
                    <Icons name="phone" />
                </div>
                <a href="tel:" id="phone">(330) 321-3211</a>
                <a href="mailto:" id="email">drstacey@<br />mbschiro.com</a>
                <div className="svg-cont email">
                    <Icons name="email" />
                </div>
            </div>
        );
    }
}

export default Contact;