'use client';

import React from 'react';

// Dependencies
import axios from "axios";

const DropDownMenu = ({ userStatus }: any) => {

    const status = {
        "OPEN": "Open",
        "CLOSE": "Close",
        "IN_PROGRESS": "Working",
        "HOLD": "Hold",
        "DELETE": "Delete",
    }

    const handleIssueStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.selectedOptions[0];
        const urlWithParams = "http://localhost:3000/api/issues?id="+event.target.id;
        if(selectedOption.value !== "DELETE"){
            const data = {status: selectedOption.value}
            axios.put(urlWithParams, data)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }else{
            axios.delete(urlWithParams)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <select className="border-gray-500 rounded bordered text-sm py-1 pr-20 focus-visible:border-gray-500" id={userStatus.id} onChange={handleIssueStatusChange}>
                {Object.entries(status).map(([key, value]) => <option className={`d-flex justify-between text-sm px-5 py-0.5 ${key === "DELETE" && "text-slate-900 bg-red-200"}`} key={key} value={key} selected={key === userStatus.status ? true : false} >{value}</option>)}
            </select>
        </div>
    )
}

export default DropDownMenu