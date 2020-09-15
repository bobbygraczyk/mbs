import React from 'react';
import Icons from '../components/icons';

class BenefitsCard extends React.Component {
    render() {
        return (
            <div className="benefits-card">
                <div className="ben-card-icon drop-shadow">
                    <Icons name={this.props.icon} />
                </div>
                <div className="ben-card-copy drop-shadow">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.copy}</p>
                </div>
            </div>
        )
    }
}

export default BenefitsCard;