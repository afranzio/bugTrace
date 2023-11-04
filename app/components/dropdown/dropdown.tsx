'use client';

import React from 'react';

// Dependencies
import axios from "axios";

const DropDownMenu = ({ userStatus }: any) => {

    const handleIssueStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.selectedOptions[0];
        const urlWithParams = "http://localhost:3000/api/issues?id="+event.target.id
        const data = {status: selectedOption.value}
        axios.put(urlWithParams, data)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    const status = {
        "OPEN": "Open",
        "CLOSE": "Close",
        "IN_PROGRESS": "Working",
        "HOLD": "Hold",
    }

    return (
        <div>
            <select className="border-none text-sm py-0 focus-visible:border-none" id={userStatus.id} onChange={handleIssueStatusChange}>
                {Object.entries(status).map(([key, value]) => <option className="d-flex justify-between text-sm px-5 py-0" key={key} value={key} selected={key == userStatus.status ? true : false} >{value}</option>)}
            </select>
        </div>
    )
}

export default DropDownMenu