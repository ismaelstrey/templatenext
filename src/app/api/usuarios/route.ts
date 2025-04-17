import type { User } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "~/lib/prisma";


export async function GET() {
    console.log("GET");
    try {
        const response = await prisma.user.findMany();
        return  NextResponse.json(response, {status: 200}); 
    }catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error al obtener los usuarios"}, {status: 500});
    }
}

export async function POST(request: Request) {
    console.log("POST");
    const { name, email } = await request.json(); 
    try {
        const response = await prisma.user.create({
            data: {
                name: name,
                email: email
            }
        }); 
        return  NextResponse.json(response, {status: 200});
    }catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error al crear el usuario"}, {status: 500}); 
    }
}

export async function PUT(request: Request) {
    console.log("PUT");
    const { id, name, email,type }:User = await request.json(); 
    console.log(id, name, email,type);
    try {
        const response = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                type: type
            }
        }); 
        return  NextResponse.json(response, {status: 200});
    }catch (error) {
        console.log(error)
        return NextResponse.json({message: "Error al actualizar el usuario"}, {status: 500});
    }
}