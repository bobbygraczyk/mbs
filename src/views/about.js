import React from 'react';
import Icons from '../components/icons';
import CallToAction from '../components/action';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="hero-wrapper">
                    <div className="frame head">
                        <h1>About Us</h1>
                        <p>
                        Mind Body &amp; Soul Chiropractic, LCC is family owned and operated. It is the only 100% mobile chiropractic office in Northeast Ohio. When Dr. Stacey chose a name for her practice, she wanted something that would express her passion for treating a patient in all aspects of their lives. As an individual, it is believed that the mind, body and soul are the three elements that make us who we are. We must focus on all the elements if we want to live happier, healthier lives and achieve optimal health. The World Health Organization defines Health as a state of complete physical, mental, and social well-being and not merely the absen
                        </p>
                    </div>
                    <div className="frame mission">
                        <h2>Our Mission</h2>
                        <p>
                            To improve the connection between the body and mind and to restore harmony throughout the human body, with the use of specific chiropractic adjustments and quality chiropractic care, and the convenience of a chiropractor that comes to you.
                        </p>
                    </div>
                    <div className="frame values">
                        <h2>Our Values</h2>
                        <ValueCard title="Serving Others" icon="info" />
                        <ValueCard title="Authenticity" icon="info" />
                        <ValueCard title="Transparency" icon="info" />
                        <ValueCard title="Positivity" icon="info" />
                        <ValueCard title="Connection" icon="info" />
                        <ValueCard title="Commitment" icon="info" />
                        <ValueCard title="Faith" icon="info" />
                        <ValueCard title="Passion" icon="info" />
                        <ValueCard title="Time" icon="info" />
                        <ValueCard title="Honesty" icon="info" />
                        <ValueCard title="Integrity" icon="info" />
                    </div>
                    <div className="frame about-bio">
                        <h2>More About Dr. Stacey</h2>
                        <p>Dr. Stacey Brehm D.C. was born and raised in Northeast Ohio. She graduated from Medina Senior High School in 2009. After high school, she attended the University of Akron to earn her Bachelor’s in Exercise Science. After achieving her Bachelor’s degree, she attended Palmer College of Chiropractic in Port Orange, Florida where she earned her doctorate in chiropractic. Dr. Stacey has always had a passion for helping people live happier, healthier lives.</p>
                    </div>
                    <div className="frame chiro">
                        <h2>What is Chiropractic Care?</h2>
                        <div className="info-box">
                            <p>Chiropractic is a health-care profession that focuses on the musculoskeletal system and its connection to the nervous system. Chiropractors use adjustments to restore joint function and support the nervous system. This helps the patient maintain optimal health while avoiding unnecessary drugs and surgery. A chiropractor specializes in spinal health and well-being. They focus on preventing, diagnosing, and treating spine-related disorders and other painful joint issues. In addition to adjustments, chiropractors also provide soft-tissue therapies, lifestyle recommendations, exercises to prevent re-injury, and nutritional advice.</p>
                            <Icons name="info" />
                        </div>
                    </div>
                    <div className="frame about-benefits">
                        <h2>Benefits of Chiropractic Care</h2>
                        <BenefitsListItem title="Improve Sleep" icon="info" />
                        <BenefitsListItem title="Increase Mobility" icon="info" />
                        <BenefitsListItem title="Improve Immune System" icon="info" />
                        <BenefitsListItem title="Increase Performance" icon="info" />
                        <BenefitsListItem title="Increase Energy" icon="info" />
                        <BenefitsListItem title="Reduce Lower Back Pain" icon="info" />
                        <BenefitsListItem title="Reduce numbness, tingling, radiation" icon="info" />
                        <BenefitsListItem title="Reduce muscle tension" icon="info" />
                        <BenefitsListItem title="Decrease degeneration/arthritis" icon="info" />
                        <BenefitsListItem title="Speed up the recovery process" icon="info" />
                        <BenefitsListItem title="Improve individual organ systems" icon="info" />
                        <BenefitsListItem title="Relieve and improve prenatal discomfort" icon="info" />
                        <BenefitsListItem title="Improve circulation" icon="info" />
                        <BenefitsListItem title="Improve nerve system functions" icon="info" />
                        <BenefitsListItem title="Improve quality of life" icon="info" />
                        <BenefitsListItem title="Decrease pain" icon="info" />
                    </div>
                    <CallToAction />
                </div>
            </div>
        );
    }
}

class ValueCard extends React.Component {
    render() {
        return (
            <div className="col-30 value-card">
                <Icons name={this.props.icon} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

class BenefitsListItem extends React.Component {
    render() {
        return (
            <div className="col-50 ben-list-item">
                <div className="ben-list-icon">
                    <Icons name={this.props.icon} />
                </div>
                <div className="ben-list-title">
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

export default About;