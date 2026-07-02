import { NextResponse } from "next/server";

const BASE_URL = 'https://wehoware-saas.vercel.app';
const CLIENT_ID = 'bbd8a4a6-b5d8-4af9-aa5d-becfdcadc3ba';

export async function GET() {
  try {
    const res = await fetch(`${BASE_URL}/api/public/blogs?clientId=${CLIENT_ID}&page=1&limit=10`, {
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
