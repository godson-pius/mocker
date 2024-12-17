import {NextResponse} from "next/server";

export async function POST() {
    try {
        const data = {
            "message": "Ok",
            "status": "success"
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message || "An unexpected error occurred" },
            { status: 500 }
        );
    }
}