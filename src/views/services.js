import React from 'react';

class Services extends React.Component {
    render() {
        return (
            <div className="services">
                <div className="hero-container">
                    <div className="frame">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="frame appts">
                    <h2>Appointment Types</h2>
                    <div className="appt-type col-30">
                        <h3>New Patient Exam</h3>
                        <span className="subhead">(45 minutes - 1 hour)</span>
                        <ul>
                            <li>Thorough Health History Questionnaire: filled out prior to 1st appointment.</li>
                            <li>Orthopedic Tests: Clinically proven tests to help the doctor find out the cause of the problem.</li>
                            <li>Neurologic Exam: Thorough evaluation of the nervous system and how it is functioning.</li>
                            <li>Range of Motion: An evaluation of the restrictions or improper movement of the joints of the skeletal system.</li>
                            <li>Spinal Exam: Allows the doctor to find the dysfunctional joints throughout the spinal column.</li>
                            <li>Muscle Tests: Allow the doctor to located musculoskeletal weakness throughout the body. </li>
                            <li>Function Movement Assessment: Evaluates the body’s ability to move and perform everyday tasks.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;