import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, company, email, phone, service, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Prénom, email et message sont requis." },
        { status: 400 }
      );
    }

    console.log("[Contact]", { name, company, email, phone, service, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
