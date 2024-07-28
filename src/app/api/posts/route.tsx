import clientPromise from "../../../lib/mongodb";
import { NextRequest, NextResponse } from 'next/server';

// The use of the dynamic = 'force-dynamic' directive is correct for enforcing dynamic data fetching Nextjs
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    try {
        const client = await clientPromise;
        const db = client.db("blogDB");
        const posts = await db
            .collection("posts")
            .find({})
            .toArray();
        return NextResponse.json(posts);
    } catch (e) {
        console.error(e);
        return NextResponse.error();
    }
}
