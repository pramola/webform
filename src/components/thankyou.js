import React from 'react'
import './thankyou.css';


function ThankYou ({fn}){
    

    return (<>
        <div className="upper-confirm">
            <div className="upper-msg">
        <h2>Thank You</h2>
        <h4>For submitting and sharing your precious time.... :)</h4>
            </div>
        <div className="lower-confirm" >
            <div className ="re-submit" onClick={fn}>Submit another Response</div>
        </div>
        </div>
    </>)
}

export default ThankYou;