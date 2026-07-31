import { NextResponse } from "next/server";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  // Honeypot anti-spam : si rempli, on feint le succès.
  if (asTrimmedString(body.company) !== "") {
    return NextResponse.json({ message: "Message reçu." });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name || name.length > 100) {
    return NextResponse.json({ message: "Nom invalide." }, { status: 400 });
  }

  if (!email || email.length > 150 || !isValidEmail(email)) {
    return NextResponse.json({ message: "Email invalide." }, { status: 400 });
  }

  if (!message || message.length > 2000) {
    return NextResponse.json({ message: "Message invalide." }, { status: 400 });
  }

  // Mode test : log serveur (pas d'envoi mail).
  console.info("[contact]", {
    at: new Date().toISOString(),
    name,
    email,
    messageLength: message.length,
  });

  return NextResponse.json({ message: "Message enregistré (mode test)." });
}
