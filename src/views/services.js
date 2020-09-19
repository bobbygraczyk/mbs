import React from 'react';
import CallToAction from '../components/action';
import Icons from '../components/icons';

class Services extends React.Component {
    render() {
        return (
            <div className="services">
                <div className="hero-wrapper">
                    <div className="frame head">
                        <h1>Services</h1>
                    </div>
                </div>
                <div className="bar" />
                <div className="frame appts">
                    <h2 className="subtitle">Appointment Types</h2>
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
                    <div className="appt-type col-30">
                        <h3>Re-Examination</h3>
                        <span className="subhead">(30 - 45 minutes)</span>
                        <ul>
                            <li>A re-examination allows the doctor to evaluate how the patient is progressing and make any necessary changes to continue progressing to the patient’s maximal health potential. The doctor will evaluate the patient’s progress by preforming all exams and tests performed on the first visit.</li>
                        </ul>
                    </div>
                    <div className="appt-type col-30">
                        <h3>Routine Daily Visit</h3>
                        <span className="subhead">(10 - 20 minutes)</span>
                        <ul>
                            <li>A routine visit will be based on the findings of the patient’s new patient exam. All findings will be thoroughly evaluated by the doctor, and the doctor will make the recommended treatment plan cater toward the patient’s specific needs. The doctor will go over all findings and recommends with the patient before beginning the treatment plan.</li>
                        </ul>
                    </div>
                </div>
                <div className="frame payment">
                    <div className="col-50 pay-type">
                        <Icons name="info" />
                        <h2>Payment Options</h2>
                        <p>
                            We accept all HSA / FSA cards, credit / debit cards, and Venmo. We do not accept cash or checks.
                        </p>
                    </div>
                    <div className="col-50 pay-type">
                        <Icons name="info" />
                        <h2>Insurance Options</h2>
                        <p>
                            We can provide you with an itemized bill (super bill) that you can personally submit to your insurance company for reimbursement. However, all insurance plans are different, so reimbursement is not guaranteed.
                        </p>
                    </div>
                    <div className="frame booking">
                        <h2>Booking Fees</h2>
                        <p>
                            A booking fee of $25 must be electronically paid in order to book an appointment. The $25 will be applied towards any service rendered during that patient visit.  Remaining balances must be paid at the time of services rendered. If there is a discrepancy about a payment(s), the Doctor is always willing to discuss it with the patient. If the first visit is canceled less than 24 hours before the appointment, the booking fee will be forfeited. If the original booking fee is forfeited, the booking fee must be paid again prior to rescheduling your new patient appointment.
                        </p>
                    </div>
                    <div className="frame cancellation">
                        <h2>Cancellation Policy</h2>
                        <ul>
                            <li>
                                We require a 24-hour cancellation notice for our services.
                            </li>
                            <li>
                                The Doctor strategically plans the mobile route to enhance the efficiency of treating patients. Every appointment booked is valuable to the practice.
                            </li>
                            <li>
                                When there are short notice cancellations, it is almost impossible to add a replacement appointment without affecting other appointments.
                            </li>
                            <li>
                                Due to the value that each appointment has, any appointment cancelled less than 24 hours before the appointment will have a cancellation fee of $25 applied to the account. Even if your appointment is the next day, it is still required that you cancel prior to 24 hours of your appointment. (Example: If your appointment is at 3 pm on Tuesday, and you cancel your appointment at 3:01pm on Monday, the cancellation fee will be applied to your account.)
                            </li>
                            <li>
                                All accounts must have a card on file, that is not HSA/FSA, for the cancellation fee to be applied to. If there is no card on file, or if the card on file declines payment, no future appointments will be booked until the debt is settled.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bar" />
                <CallToAction />
                <div className="bar" />
            </div>
        )
    }
}

export default Services;