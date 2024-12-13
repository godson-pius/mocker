import {NextResponse} from "next/server";

export async function GET() {
    try {
        const data = {
            "data": [
                {
                    "id": "1",
                    "contact": "John Doe",
                    "reference": "INV-001",
                    "amountPaid": "100.00",
                    "availableBal": "500.00",
                    "dateReceived": "2024-12-12",
                    "description": "Payment for consulting services",
                    "paymentReference": "REF-123456",
                    "paymentMethod": "Credit Card",
                    "businessUnit": "Consulting"
                },
                {
                    "id": "2",
                    "contact": "Jane Smith",
                    "reference": "INV-002",
                    "amountPaid": "250.00",
                    "availableBal": "750.00",
                    "dateReceived": "2024-12-11",
                    "description": "Payment for software development",
                    "paymentReference": "REF-789012",
                    "paymentMethod": "Bank Transfer",
                    "businessUnit": "Development"
                },
                {
                    "id": "3",
                    "contact": "Acme Corp",
                    "reference": "INV-003",
                    "amountPaid": "500.00",
                    "availableBal": "1000.00",
                    "dateReceived": "2024-12-10",
                    "description": "Payment for annual subscription",
                    "paymentReference": "REF-345678",
                    "paymentMethod": "PayPal",
                    "businessUnit": "Subscriptions"
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