export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body as { email?: string };

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Email inválido" }, { status: 400 });
  }

  // TODO: Connect Supabase when credentials are available
  //
  // import { createClient } from "@supabase/supabase-js";
  //
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.SUPABASE_SERVICE_ROLE_KEY!
  // );
  //
  // Table: waitlist (id uuid, email text unique, created_at timestamptz default now())
  //
  // const { error } = await supabase.from("waitlist").insert({ email });
  // if (error) {
  //   if (error.code === "23505") {
  //     return Response.json({ error: "Email ya registrado" }, { status: 409 });
  //   }
  //   return Response.json({ error: "Error al guardar" }, { status: 500 });
  // }

  return Response.json({ success: true });
}
