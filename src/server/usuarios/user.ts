import prisma from "~/lib/prisma";



export const usuarios = await prisma.user.findMany();

