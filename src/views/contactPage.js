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
                        <p id="phone">(330) 321-3211</p>
                        <Icons name="email" />
                        <p id="email">drstacey@mbschiro.com</p>
                        <Icons name="info" />
                        <p id="hours">M - F / 9AM - 5PM</p>
                        <p id="copy">Your can reach Dr. Stacey by phone and email, or you may fill out the contact form below to request that Dr. Stacey reach out to you.</p>
                    </div>
                    
                    <iframe title="Contact Form" style={{ height: "1000px", width: "100%", margin: "0 auto", overflow: "hidden"}} src="https://docs.google.com/forms/d/e/1FAIpQLSfz3xJsEj8VKELg-vorpZt54PgWizrI00ByXkwnT7lArAM9FA/viewform?embedded=true" width="640" height="808" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
                <div className="bar" />
            </div>
        )
    }
}

export default ContactPage;