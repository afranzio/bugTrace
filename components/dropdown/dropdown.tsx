'use client';

import React from 'react';

// Dependencies
import axios from "axios";
import { useRouter } from 'next/navigation';

const DropDownMenu = ({ userStatus }: any) => {
    const router = useRouter();

    const status = {
        "OPEN": "Open",
        "CLOSE": "Close",
        "IN_PROGRESS": "Working",
        "HOLD": "Hold",
        "UPDATE": "Update",
        "DELETE": "Delete",
    }

    const handleIssueStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.selectedOptions[0];
        const urlWithParams = "/api/issues?id="+event.target.id;
        if(selectedOption.value !== "DELETE" && selectedOption.value !== "UPDATE"){
            const data = {status: selectedOption.value}
            axios.put(urlWithParams, data)
            .then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
        }else{
            if(selectedOption.value == "UPDATE"){
                const updateIssueURL = '/issues/update?id='+event.target.id
                router.push(updateIssueURL);
            }else{
                axios.delete(urlWithParams)
                .then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    return (
        <div className="self-center h-full d-flex">
            <select className="text-sm rounded bg-transparent border-none py-2 self-center" id={userStatus.getValue("id")} onChange={handleIssueStatusChange}>
                {Object.entries(status).map(([key, value]) => <option className={`d-flex justify-between pl-5 py-2 text-sm text-slate-900 ${key === "DELETE" && " bg-red-200"} ${key === "UPDATE" && "bg-green-200"}`} key={key} value={key} selected={key === userStatus.getValue("status") ? true : false} >{value}</option>)}
            </select>
        </div>
    )
}

export default DropDownMenu