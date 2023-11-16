import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

const updateIssueSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.string().optional(),
})

const getIDFromParams = (request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const param = Number(searchParams.get("id"));
    return param;
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    console.log(body)
    const newIssue = await prisma.issue.create({
        data: body
    })

    return NextResponse.json(newIssue, { status: 201 })

}

export async function PUT(request: NextRequest) {
    const param = getIDFromParams(request)
    const body = await request.json();
    const validation = updateIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    try {
        const updatedIssue = await prisma.issue.update({
            where: {
                id: param
            },
            data: body
        })
        return NextResponse.json(updatedIssue, { status: 202 })
    } catch (error) {
        return NextResponse.json(error, { status: 401 })
    }
}

export async function DELETE(request: NextRequest) {
    const param = getIDFromParams(request)

    if (param) {
        try {
            const deleteIssue = await prisma.issue.delete({
                where: {
                    id: param
                }
            })
            return NextResponse.json(deleteIssue, { status: 202 })
        } catch (error) {
            return NextResponse.json(error, { status: 401 })
        }
    }
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    let getUserList = prisma

    return NextResponse.json(getUserList, { status: 200 })
}