import React from 'react'
import Icons from '../components/icons';

class ContactPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="contact-page">
                <div className="hero-wrapper">
                    <div className="head frame">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className="bar" />
                <div className="frame form">
                    <div id="info">
                        <Icons name="phone" />
                        <p id="phone">(234) 281-4996</p>
                        <Icons name="email" />
                        <p id="email">drstacey@mbschiro2go.com</p>
                        <Icons name="info" />
                        <p id="hours">M - Th / 10AM - 7PM</p>
                        <p id="copy">You can reach Dr. Stacey by call, text, or email. Or, you may fill out the contact form below to request that Dr. Stacey reach out to you.</p>
                    </div>
                     <iframe id="JotFormIFrame-210055091090039" title="Contact Us" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://hipaa.jotform.com/210055091090039" frameborder="0" scrolling="no" > </iframe>
                </div>
                <div className="bar" />
            </div>
        )
    }
}

export default ContactPage;