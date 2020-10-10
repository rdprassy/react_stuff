import React from 'react';
import faker from "faker";

const ApprovalCard = (props) => {

    console.log(props)
    return (
        <div className="ui card">

            <div className="content">
               Are you sure?
            </div>
                <div className="ui two buttons">
                    <div className="ui basic green button"> Approve </div>
                    <div className="ui basic red button"> Reject </div>
                </div>

                </div>


    )
}

export default ApprovalCard;