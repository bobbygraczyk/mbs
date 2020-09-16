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
                    </div>
                </div>
                <div className="frame mission">
                    <p>
                        Mind Body &amp; Soul Chiropractic, LCC is family owned and operated. It is the only 100% mobile chiropractic office in Northeast Ohio. When Dr. Stacey chose a name for her practice, she wanted something that would express her passion for treating a patient in all aspects of their lives. As an individual, it is believed that the mind, body and soul are the three elements that make us who we are. We must focus on all the elements if we want to live happier, healthier lives and achieve optimal health. The World Health Organization defines Health as a state of complete physical, mental, and social well-being and not merely the absen
                    </p>
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
                <div className="frame faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; All accounts must have a card on file, that is not HSA/FSA, for the cancellation fee to be applied to. If there is no card on file, or if the card on file declines payment, no future appointments will be booked until the debt is settled.
                        </p>
                        <p class="answer">
                            No, insurance does not cover services provided by a chiropractor outside of the office setting.  Also, maintenance and wellness care are non-covered services with most insurance plans. Credit or debit cards, venmo, FSA, and HSA are some of the payment options.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; How long does an appointment take?                            
                        </p>
                        <p class="answer">
                            A session is based upon the services needed on that particular day. An average session will typically run 10-60 minutes; With initial visits taking the longest amount of time.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; Where do you travel to?
                        </p>
                        <p class="answer">
                            Counties in Ohio Serviced: Cuyahoga County, Portage County, Summit County, Wayne County, Stark County, Ashland County, Lorain County.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; What if I’m out of this area?
                        </p>
                        <p class="answer">
                            Accommodations can be made, with compensation fair to time and mileage.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; Do you adjust by hand or with an instrument?
                        </p>
                        <p class="answer">
                            We use the Activator Method, which uses an instrument.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; Does it hurt?
                        </p>
                        <p class="answer">
                            An adjustment may be a little uncomfortable, but this feeling only lasts seconds. 
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; How often should I get my spine checked and adjusted?
                        </p>
                        <p class="answer">
                            It varies per individual and the health of their spine. Keep in mind that all processes take time, especially allowing your body to adapt and to heal.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; I heard that once you go to a chiropractor, you have to keep going.
                        </p>
                        <p class="answer">
                            Continued service is not always necessary, but you will want to continue maintenance care once you realize how much better you are doing. 
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; Do I need a referral from a medical doctor?
                        </p>
                        <p class="answer">
                            No, you do not need a referral.
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; Can children or babies get adjusted?
                        </p>
                        <p class="answer">
                            Absolutely! I love checking and adjusting children and infants! Their spines and nervous systems are just as important as yours! (If you havent stopped by the About page, now is the time).
                        </p>
                    </div>
                    <div className="faq-entry">
                        <p class="question">
                            &bull; I feel fine, should I get my spine checked?
                        </p>
                        <p class="answer">
                        I’ll answer that with a few questions: Why do we get routine teeth cleanings? Why do we change our motor oil every 3,000 miles?  Why do olympic athletes and all NFL teams have a chiropractor on staff?
                        </p>
                    </div>
                </div>
                <CallToAction />
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