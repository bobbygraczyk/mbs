import React from 'react';
import Icons from '../components/icons';

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="about">
                <div className="hero-wrapper">
                    <div className="frame head">
                        <h1>About Us</h1>
                        <h3>
                            Mind Body &amp; Soul Chiropractic, LCC is family owned and operated. <br />It is the only 100% mobile chiropractic office in Northeast Ohio. 
                        </h3>
                        <p>
                            When Dr. Stacey chose a name for her practice, she wanted something that would express her passion for treating a patient in all aspects of their lives.
                             As an individual, it is believed that the mind, body and soul are the three elements that make us who we are. We must focus on all the elements if we 
                             want to live happier, healthier lives and achieve optimal health. The World Health Organization defines Health as a state of complete physical, mental, 
                             and social well-being and not merely the absence of disease or infirmity. We can’t achieve optimal health if we only focus on one aspect of our life.
                        </p>
                    </div>
                </div>
                <div className="bar" />
                <div className="frame mission">
                    <h2 className="subtitle">Our Mission</h2>
                    <p id="copy">
                        To improve the connection between the body and mind and to restore harmony throughout the human body, with the use of specific chiropractic adjustments and quality chiropractic care, and the convenience of a chiropractor that comes to you.
                    </p>
                </div>
                <div className="green-span">
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
                </div>
                
                <div className="frame about-bio">
                    <div className="col-60">
                        <h2 className="subtitle">More About Dr. Stacey</h2>
                        <p>Dr. Stacey Brehm D.C. was born and raised in Northeast Ohio. She graduated from Medina Senior High School in 2009. After high school, she attended the University of Akron to earn her Bachelor’s in Exercise Science. After achieving her Bachelor’s degree, she attended Palmer College of Chiropractic in Port Orange, Florida where she earned her doctorate in chiropractic. Dr. Stacey has always had a passion for helping people live happier, healthier lives.</p>
                    </div>
                    <div className="col-30">
                        <div className="drop-shadow" id="photo" />
                    </div>
                </div>
                <div className="green-span">
                     <div className="frame chiro">
                        <h2>What is Chiropractic Care?</h2>
                        <div className="info-box">
                            <p>Chiropractic is a health-care profession that focuses on the musculoskeletal system and its connection to the nervous system. Chiropractors use adjustments to restore joint function and support the nervous system. This helps the patient maintain optimal health while avoiding unnecessary drugs and surgery. A chiropractor specializes in spinal health and well-being. They focus on preventing, diagnosing, and treating spine-related disorders and other painful joint issues. In addition to adjustments, chiropractors also provide soft-tissue therapies, lifestyle recommendations, exercises to prevent re-injury, and nutritional advice.</p>
                            <Icons name="info" />
                        </div>
                    </div>
                </div>
               
                <div className="frame benefits">
                    <h2 className="subtitle">Benefits of Chiropractic Care</h2>
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
                <div className="green-span">
                    <Faq />
                </div>
            </div>
        );
    }
}

class ValueCard extends React.Component {
    render() {
        return (
            <div className="value-card">
                <Icons name={this.props.icon} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}

class BenefitsListItem extends React.Component {
    render() {
        return (
            <div className="card drop-shadow">
                <div className="icon">
                    <Icons name={this.props.icon} />
                </div>
                <div className="title">
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

class FaqEntry extends React.Component {
    constructor(props) {
        super(props);
        this.answer = React.createRef();
        this.state = {
            isOpen: false,
        }
    }

    toggleOpen() {
        if (this.state.isOpen) {
            this.answer.style.maxHeight = "0px";
            this.answer.style.padding = "0px";
        } else {
            this.answer.style.maxHeight = "200px";
            this.answer.style.padding = "0px 12px 24px 12px";
        }
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        if (this.props.link) {
            return (
                <div className="faq-entry">
                    <p class="question" onClick={() => this.toggleOpen()}>
                        {this.props.question}
                    </p>
                    <p class="answer" ref={(x) => this.answer = x}>
                        &nbsp; <br /> {this.props.answer}<br/><br/><br/>
                        <a href={this.props.link} target="_new">Click Here</a>
                    </p>
                </div>
            )
        } else {
            return (
                <div className="faq-entry">
                    <p class="question" onClick={() => this.toggleOpen()}>
                        {this.props.question}
                    </p>
                    <p class="answer" ref={(x) => this.answer = x}>
                        &nbsp; <br /> {this.props.answer}
                    </p>
                </div>
            )
        }
        
    }
}

class Faq extends React.Component {
    render() {
        return (
            <div className="frame faq">
                <h2>Frequently Asked Questions</h2>
                <FaqEntry 
                    question="Will my insurance pay for concierge (house call) Chiropractic care?"
                    answer="Unfortunately no, insurance does not cover services provided by a chiropractor outside of the office setting. Also, maintenance and wellness care are non-covered services with most insurance plans. We currently accept cash, credit or debit, venmo, cash app, FSA, and HSA."
                />
                <FaqEntry 
                    question="How long does an appointment take?"
                    answer="A session is based upon the services needed on that particular day. An average session will typically run 10-30 minutes; With initial visits taking the longest amount of time."
                />
                <FaqEntry 
                    question="Where do you travel to?"
                    answer="Counties in Ohio Serviced: Cuyahoga County, Portage County, Summit County, Wayne County, Stark County, Ashland County, Lorain County."
                />
                <FaqEntry 
                    question="What if I’m out of this area?"
                    answer="Accommodations can be made, with compensation fair to time and mileage."
                />
                <FaqEntry 
                    question="Do you adjust by hand or with an instrument?"
                    answer="We use the ImpulseIQ for adjusting bones and re-setting muscles. To learn more about the ImpulseIQ click on the link below."
                    link="https://www.youtube.com/watch?v=nz-V2xojVoI"
                />
                <FaqEntry 
                    question="Does it hurt?"
                    answer="An adjustment may be a little uncomfortable, but this feeling only lasts seconds."
                />
                <FaqEntry 
                    question="How often should I get my spine checked and adjusted?"
                    answer="It varies per individual and the health of their spine. Keep in mind that all processes take time, especially allowing your body to adapt and to heal."
                />
                <FaqEntry 
                    question="I heard that once you go to a chiropractor, you have to keep going."
                    answer="Continued service is not always necessary, but you will want to continue maintenance care once you realize how much better you are doing."
                />
                <FaqEntry 
                    question="Do I need a referral from a medical doctor?"
                    answer="No, you do not need a referral."
                />
                <FaqEntry 
                    question="Can children or babies get adjusted?"
                    answer="Absolutely! I love checking and adjusting children and infants! Their spines and nervous systems are just as important as yours! (If you havent stopped by the About page, now is the time)."
                />
                <FaqEntry 
                    question="I feel fine, should I get my spine checked?"
                    answer="I’ll answer that with a few questions: Why do we get routine teeth cleanings? Why do we change our motor oil every 3,000 miles?  Why do olympic athletes and all NFL teams have a chiropractor on staff?"
                />
            </div>
        )
    }
}

export default About;