'use client';

import React, { useState } from 'react';


const DropDownMenu = ({ userStatus }: any) => {
    const [selectedOption, setSelectedOption] = useState('OPEN');

    const handleIssueStatusChange = async (event: object) => {
        const selectedValue = event.target.value;
        console.log(selectedValue);
        setSelectedOption(selectedValue);
    }

    const status = {
        "OPEN": "Open",
        "CLOSE": "Close",
        "IN_PROGRESS": "Working",
        "HOLD": "Hold",
    }

    return (
        <div>
            <select className="border-none text-sm py-0 focus-visible:border-none" value={selectedOption} onChange={handleIssueStatusChange}>
                {Object.entries(status).map(([key, value]) => <option className="d-flex justify-between text-sm px-5 py-0" key={key} id={userStatus.id} selected={key==userStatus.status ? true : false } >{value}</option>)}
            </select>
        </div>
    )
}

export default DropDownMenu