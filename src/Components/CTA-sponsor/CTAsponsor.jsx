import React from 'react';
import './ctasponsor.css';

const CTAsponsor = () => {
    return (
        <div className="cta_sponsor">
            <div className="cta_content">
                <p>For more information, please see the GDSC WoW sponsorship brochure. For any questions regarding sponsorship, please contact us at sponsorship@gdscpune.tech</p>
                <h3>Call for Sponsors is live!</h3>
            </div>
            <div className="cta_btn">
                <button type="button"><a href="mailto:sponsorship@gdscpune.tech" target="_blank">Mail us</a></button>
            </div>
        </div>
    )
}

export default CTAsponsor