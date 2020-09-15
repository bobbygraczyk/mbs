import React from 'react';
import Icons from '../components/icons';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="svg-cont">
                    <Icons name="phone" />
                </div>
                <a href="tel:">(330) 321-3211</a>
                <a href="mailto:">drstacey@mbschiro.com</a>
                <div className="svg-cont">
                    <Icons name="email" />
                </div>
            </div>
        );
    }
}

export default Contact;