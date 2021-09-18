import Table from './table/table';
import React from 'react';
import './feedback.css'
function Feedback(){
    const dat = JSON.parse(localStorage.getItem('feedback'));
    console.log(dat)
    if(dat === {} || dat === null){
        return (
            <div className="no-data">
                <h4 >No Submission </h4>
                <h5>Pls submit some responses</h5>
            </div>)
    }

    return <Table/>
}

export default Feedback;