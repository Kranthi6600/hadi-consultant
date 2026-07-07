import { NextResponse } from "next/server";
import { API_BASE_URL, API_CLIENT_ID } from "@/lib/api";

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/blogs?clientId=${API_CLIENT_ID}&page=1&limit=10`, {
      cache: 'no-store',
    });
    if (!res.ok) return NextResponse.json({ data: [], schema: null }, { status: 200 });
    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data : (Array.isArray(json) ? json : []);
    const schema = json.schema || null;
    return NextResponse.json({ data, schema });
  } catch {
    return NextResponse.json({ data: [], schema: null }, { status: 200 });
  }
}
