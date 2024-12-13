import { NextResponse } from "next/server";

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
                },
                {
                    "id": "2",
                    "recipient": "mark.adams@example.com",
                    "sender": "jane.doe@example.com",
                    "date": "2024-12-04",
                    "subject": "Meeting Reminder",
                    "description": "This is a reminder for our meeting scheduled tomorrow at 10:00 AM.",
                    "status": "Completed"
                },
                {
                    "id": "3",
                    "recipient": "team@example.com",
                    "sender": "project.manager@example.com",
                    "date": "2024-12-03",
                    "subject": "Weekly Report",
                    "description": "Please find the attached weekly report for your review.",
                    "status": "Pending"
                },
                {
                    "id": "4",
                    "recipient": "client@example.com",
                    "sender": "support@example.com",
                    "date": "2024-12-02",
                    "subject": "Support Request Update",
                    "description": "Your support request has been escalated to the technical team for further assistance.",
                    "status": "In Progress"
                },
                {
                    "id": "5",
                    "recipient": "ceo@example.com",
                    "sender": "assistant@example.com",
                    "date": "2024-12-01",
                    "subject": "Monthly Financial Overview",
                    "description": "Attached is the financial overview for November 2024. Please let me know if you need any clarifications.",
                    "status": "Reviewed"
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
