import { NextRequest, NextResponse } from "next/server";
import prisma from "~/lib/prisma";
export async function GET(request:NextRequest,{ params }:{ params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log(request)
    if(id){
        try {
            const response = await prisma.user.findUnique({
                where: {
                    id:String(id)
                }
            }); 
            return  NextResponse.json(response, {status: 200});
        } catch (error) {
            console.log(error)
            return NextResponse.json({message: "Error al obtener el usuario"}, {status: 500}); 
        }
    }
 
}