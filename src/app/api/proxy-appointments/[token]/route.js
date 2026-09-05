import { NextResponse } from "next/server";
import {
  BOOKING_API_BASE,
  bookingErrorMessage,
} from "@/lib/bookingApi";

export const dynamic = "force-dynamic";

// Token endpoints (GET/PUT/DELETE) do not require a clientId query param
// per the Wehoware public API spec.

// GET /api/proxy-appointments/[token] -> GET /appointments/{token}
export async function GET(request, { params }) {
  const token = params?.token;
  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }
  try {
    const res = await fetch(
      `${BOOKING_API_BASE}/appointments/${encodeURIComponent(token)}`,
      { cache: "no-store", headers: { Accept: "application/json" } }
    );
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }
    if (!res.ok) {
      return NextResponse.json(
        { error: bookingErrorMessage(res.status), status: res.status, data },
        { status: res.status }
      );
    }
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: bookingErrorMessage(500) },
      { status: 500 }
    );
  }
}

// PUT /api/proxy-appointments/[token] -> PUT /appointments/{token}
export async function PUT(request, { params }) {
  const token = params?.token;
  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }
  try {
    const body = await request.json();
    const res = await fetch(
      `${BOOKING_API_BASE}/appointments/${encodeURIComponent(token)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }
    if (!res.ok) {
      return NextResponse.json(
        { error: bookingErrorMessage(res.status), status: res.status, data },
        { status: res.status }
      );
    }
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: bookingErrorMessage(500) },
      { status: 500 }
    );
  }
}

// DELETE /api/proxy-appointments/[token] -> DELETE /appointments/{token}
export async function DELETE(request, { params }) {
  const token = params?.token;
  if (!token) {
    return NextResponse.json({ error: "Missing token." }, { status: 400 });
  }
  try {
    const res = await fetch(
      `${BOOKING_API_BASE}/appointments/${encodeURIComponent(token)}`,
      {
        method: "DELETE",
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }
    if (!res.ok) {
      return NextResponse.json(
        { error: bookingErrorMessage(res.status), status: res.status, data },
        { status: res.status }
      );
    }
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: bookingErrorMessage(500) },
      { status: 500 }
    );
  }
}
