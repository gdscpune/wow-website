import React from 'react';
import './cta.css';

const CTAspeaker = () => {
    return (
        <div className="cta">
            <div className="cta_content">
                <h3>Call for Speakers is live!</h3>
            </div>
            <div className="cta_btn">
                <button type="button"><a className="text-white" href="https://forms.gle/8XTH7vGBMmT1SsHh6" target="_blank">Register now</a></button>
            </div>
        </div>
    )
}

export default CTAspeaker