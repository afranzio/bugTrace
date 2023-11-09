import React from 'react'

// Components
import IssueForm from '@/components/issue/form';

// DB
import prisma from "@/prisma/client";

type Props = {
    params: {},
    searchParams: { [key: string]: string | string[] | undefined },
}

const UpdateIssue = async (props: Props) => {
    const id = Number(props.searchParams.id);
    let requestedIssues;

    try {
        requestedIssues = await prisma.issue.findUniqueOrThrow({
            where: { id: id }
        })
    } catch (error) {
        console.error('An error occurred:', error);
    }

    return (
        <div className="container w-full md:w-1/2">
            <h2 className="text-xl border-b border-gray-900/10 pb-3 font-semibold leading-7 subpixel-antialiased">Update Issue</h2>
            <IssueForm requestedIssues={requestedIssues} />
        </div>
    )
}

export default UpdateIssue