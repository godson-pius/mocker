import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = {
            "data": [
                {
                    "id": "1",
                    "createdBy": "Alice Johnson",
                    "note": "Followed up with the client for additional details.",
                    "date": "2024-12-11"
                },
                {
                    "id": "2",
                    "createdBy": "Bob Smith",
                    "note": "Updated the project timeline based on new requirements.",
                    "date": "2024-12-10"
                },
                {
                    "id": "3",
                    "createdBy": "Catherine Brown",
                    "note": "Reviewed and approved the final design.",
                    "date": "2024-12-09"
                }
            ],
            "links": {
                "first": "https://ma.memberbase-test.com/api/v1/communications?page=1",
                "last": "https://ma.memberbase-test.com/api/v1/communications?page=2",
                "prev": null,
                "next": "https://ma.memberbase-test.com/api/v1/communications?page=2"
            },
            "meta": {
                "current_page": 1,
                "from": 1,
                "last_page": 2,
                "links": [
                    {
                        "url": null,
                        "label": "pagination.previous",
                        "active": false
                    },
                    {
                        "url": "https://ma.memberbase-test.com/api/v1/communications?page=1",
                        "label": "1",
                        "active": true
                    },
                    {
                        "url": "https://ma.memberbase-test.com/api/v1/communications?page=2",
                        "label": "2",
                        "active": false
                    },
                    {
                        "url": "https://ma.memberbase-test.com/api/v1/communications?page=2",
                        "label": "pagination.next",
                        "active": false
                    }
                ],
                "path": "https://ma.memberbase-test.com/api/v1/communications",
                "per_page": 15,
                "to": 15,
                "total": 20
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

export async function PATCH() {
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

export async function DELETE() {
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
