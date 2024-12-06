import {NextResponse} from "next/server";

export async function POST() {
    try {
        const data = {
            "data": {
                "otp": generateTokens()
            }
        }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message || "An unexpected error occurred" },
            { status: 500 }
        );
    }
}

function generateTokens() {
    return Math.floor(1000 + Math.random() * 9000);
}