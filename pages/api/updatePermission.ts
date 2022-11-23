//import { PrismaClient } from "@prisma/client";
import { prisma } from "./prisma";

export default async function handle(req: any, res: any) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const {
    permission_ID,
    permission_section,
    permission_section_code,
    permission_item,
    permission_item_code,
    permission_item_description,
  } = req.body;

  const result = await prisma.tbl_permission.update({
    where: { permission_ID: Number(permission_ID) },
    data: {
      permission_section: permission_section,
      permission_section_code: permission_section_code,
      permission_item: permission_item,
      permission_item_code: permission_item_code,
      permission_item_description: permission_item_description,
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
