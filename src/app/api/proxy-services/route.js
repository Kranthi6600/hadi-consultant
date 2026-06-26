import { fetchServices } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, pagination } = await fetchServices({ limit: 100 });
    return NextResponse.json({ data, pagination });
  } catch {
    return NextResponse.json({ data: [], pagination: null }, { status: 200 });
  }
}
