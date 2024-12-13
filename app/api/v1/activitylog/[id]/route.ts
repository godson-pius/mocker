import {NextResponse} from "next/server";

export async function GET() {
    try {
        const data = {
            "data": [
                {
                    "id": "1",
                    "recipient": "jane.doe@example.com",
                    "sender": "john.smith@example.com",
                    "date": "2024-12-05",
                    "subject": "Project Update",
                    "description": "The project is progressing well, and we are on track for completion by the deadline.",
                    "status": "In Progress"
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