import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

const getIDFromParams = (request: NextRequest) => {
    const {searchParams} = new URL(request.url);
    const param = Number(searchParams.get("id"));
    return param;
}

export async function POST (request: NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success){
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const newIssue = await prisma.issue.create({
        data: {title: body.title, description: body.description} 
    })

    return NextResponse.json(newIssue, { status: 201})

}

export async function PUT (request: NextRequest){
    const param = getIDFromParams(request)
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success){
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    try {
        const deleteIssue = await prisma.issue.update({
            where: {
                id: param
            },
            data: {title: body.title, description: body.description} 
        })
        return NextResponse.json(deleteIssue, { status: 202})
    } catch (error) {
        return NextResponse.json(error , { status: 401})
    }
}

export async function DELETE (request: NextRequest){
    const param = getIDFromParams(request)

    if(param){
        try {
            const deleteIssue = await prisma.issue.delete({
                where: {
                    id: param
                }
            })
            return NextResponse.json(deleteIssue, { status: 202})
        } catch (error) {
            return NextResponse.json(error , { status: 401})
        }
    }
}

export async function GET (request: NextRequest){
    const param = getIDFromParams(request)

    if(param){
        try {
            const getIssue = await prisma.issue.findUniqueOrThrow({
                where: {
                    id: param
                }
            })
            return NextResponse.json(getIssue, { status: 200})
        } catch (error) {
            return NextResponse.json(error , { status: 401})
        }
    }

    const getIssues = await prisma.issue.findMany()
    return NextResponse.json(getIssues, { status: 200})
}