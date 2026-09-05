import { NextResponse } from "next/server";
import {
  BOOKING_API_BASE,
  BOOKING_CLIENT_PARAM,
  bookingErrorMessage,
} from "@/lib/bookingApi";

export const dynamic = "force-dynamic";

// GET /api/proxy-appointments
// Supported query params:
//   op=types           -> GET /appointment-types
//   op=availability    -> GET /availability (requires appointment_type_slug, from, to)
//   op=fetch&token=... -> GET /appointments/{token}  (convenience passthrough)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const op = searchParams.get("op") || "types";

  let upstreamUrl;
  if (op === "types") {
    upstreamUrl = `${BOOKING_API_BASE}/appointment-types?${BOOKING_CLIENT_PARAM}`;
  } else if (op === "availability") {
    const slug = searchParams.get("appointment_type_slug");
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    if (!slug || !from || !to) {
      return NextResponse.json(
        { error: "Missing appointment_type_slug, from, or to." },
        { status: 400 }
      );
    }
    upstreamUrl =
      `${BOOKING_API_BASE}/availability?${BOOKING_CLIENT_PARAM}` +
      `&appointment_type_slug=${encodeURIComponent(slug)}` +
      `&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
  } else if (op === "fetch") {
    const token = searchParams.get("token");
    if (!token) {
      return NextResponse.json({ error: "Missing token." }, { status: 400 });
    }
    // Token endpoints do not require clientId per the API spec.
    upstreamUrl = `${BOOKING_API_BASE}/appointments/${encodeURIComponent(
      token
    )}`;
  } else {
    return NextResponse.json({ error: "Unknown op." }, { status: 400 });
  }

  try {
    const res = await fetch(upstreamUrl, {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
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

// POST /api/proxy-appointments -> POST /appointments
export async function POST(request) {
  try {
    const body = await request.json();
    const upstreamUrl = `${BOOKING_API_BASE}/appointments?${BOOKING_CLIENT_PARAM}`;
    const res = await fetch(upstreamUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    // 200 and 201 are both success
    if (!res.ok && res.status !== 201) {
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
