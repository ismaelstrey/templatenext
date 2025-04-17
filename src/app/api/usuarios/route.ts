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