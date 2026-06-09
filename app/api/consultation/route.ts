import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, department, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "이름, 이메일, 문의 내용은 필수입니다." },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO "Consultation" (name, email, phone, department, message, "createdAt")
      VALUES (${name}, ${email}, ${phone ?? null}, ${department ?? null}, ${message}, NOW())
      RETURNING id
    `;

    return NextResponse.json({ success: true, id: result[0].id }, { status: 201 });
  } catch (error) {
    console.error("[consultation POST]", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const rows = await sql`
      SELECT * FROM "Consultation" ORDER BY "createdAt" DESC
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("[consultation GET]", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
