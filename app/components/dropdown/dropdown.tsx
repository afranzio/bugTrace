'use client';

import React from 'react'


const DropDownMenu = ({ userStatus }: any) => {
    const status = {
        "OPEN": "Open",
        "CLOSE": "Close",
        "IN_PROGRESS": "Working",
        "HOLD": "Hold",
    }

    return (
        <div>
        <select className="border-none text-sm py-0 focus-visible:border-none">
                {Object.entries(status).map(([key, value]) => <option className="d-flex justify-between text-sm px-5 py-0" key={key} selected={key==userStatus.status ? true : false } >{value}</option>)}
            </select>
        </div>
    )
}

export default DropDownMenu