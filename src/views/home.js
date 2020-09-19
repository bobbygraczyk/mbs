import React from 'react';
import Button from '../components/button';
import CallToAction from '../components/action';
import BenefitsCard from '../components/benefitsCard';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="hero-wrapper">
                    <div className="frame head">
                        <h1>Northeast Ohio's only <br /> 100% mobile chiropractor</h1>
                    </div>
                </div>
                <div className="bar" />
                <div className="frame meet">
                    <h2 className="subtitle">Meet Dr. Stacey</h2>
                    <div className="col-60" id="bio">
                        <p>Born and raised in Northeast Ohio, Dr. Stacey started a mobile chiropractic practice because she saw a need in her community that wasn’t being fulfilled. Due to the high overhead of a typical brick and mortar office, the average chiropractic doctor must treat an extremely high volume of patients every day to make a living. Tired of seeing patients get rushed through an inadequate five minute appointment, she saw an opportunity - starting a mobile chiropractic clinic would allow her the flexibility to spend more time with her patients while giving her a better understanding of the patient's lifestyle at home or in the workplace. This allows her to provide more specific care for the patient's needs.</p>
                        <Button icon={"info"} label={"Learn More About Dr. Stacey"} />
                    </div>
                    <div className="col-30 drop-shadow" id="bio-photo">
                        {/* bio photo */}
                    </div>
                </div>
                <div className="green-span">
                    <div className="frame benefits">
                        <h2>Benefits of Mobile Care</h2>
                        <div className="col-30">
                            <BenefitsCard 
                                title="Scheduling" 
                                icon="info"
                                copy="Many people have a hard time fitting their chiropractic care into their busy lives - most have work schedules that are nearly identical to the working hours of a typical brick and mortar chiropractic office. When the chiropractor comes to you, you don’t have to worry about missing work, falling behind, or rushing to make your appointment."
                            />
                        </div>
                        <div className="col-30">
                            <BenefitsCard 
                                title="Ease" 
                                icon="info"
                                copy="Getting chiropractic care doesn’t have to be a hassle. You won’t have to deal with the stress of leaving your home and family, or bad traffic on the way to your appointment. When the chiropractor comes to you, you receive quality chiropractic care from the comfort of your own home or workplace."
                            />
                        </div>
                        <div className="col-30">
                            <BenefitsCard 
                                title="Save Time" 
                                icon="info"
                                copy="Your time is important. It’s frustrating to be stuck waiting in a lobby for a longer amount of time than the actual treatment takes. When the chiropractor comes to you, there’s no waiting! This gives the doctor more time to understand your needs and allows them to give you the personalized and focused care you deserve."
                            />
                        </div>
                        <p>
                            With mobile treatment, the doctor will be able to get a better idea of your lifestyle
                            and the environment you experience every day. With this kind of insight, the doctor
                            will be able to provide key information and strategies on how you can achieve your health goals.
                        </p>
                    </div>
                </div>
                
                <CallToAction />
                <div className="bar" />
            </div>
        );
    }
}

export default Home;