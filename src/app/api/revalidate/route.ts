// https://localhost:3000/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=7ff69cf8608f68cfcad9ae9afa116c5d

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/dist/client/components/headers";

export async function GET(request: NextRequest) {
	const token = request.headers.get("revalidate_token");
	if (token !== process.env.REVALIDATE_TOKEN) {
		return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
			status: 401,
			statusText: "Unauthorized",
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const path = request.nextUrl.searchParams.get("path") || "/";

	revalidatePath(path);

	return NextResponse.json({ revalidated: true });
}
