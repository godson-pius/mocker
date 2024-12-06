import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = {
            "data": [
                {
                    "id": 1,
                    "name": "Associate Membership",
                    "description": "<div>Associate Membership</div>",
                    "customerType": "",
                    "displayOrder": 0,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "50.0000",
                    "productCode": "SB-1-1"
                },
                {
                    "id": 2,
                    "name": "Ordinary Membership",
                    "description": "<div>Ordinary Membership</div>",
                    "customerType": "",
                    "displayOrder": 10,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "50.0000",
                    "productCode": "SB-1-2"
                },
                {
                    "id": 3,
                    "name": "Overseas Associate",
                    "description": "<div>Overseas Associate</div>",
                    "customerType": "",
                    "displayOrder": 20,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "50.0000",
                    "productCode": "SB-1-3"
                },
                {
                    "id": 4,
                    "name": "All Membership",
                    "description": "<div>All Membership</div>",
                    "customerType": "",
                    "displayOrder": 30,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "50.0000",
                    "productCode": "SB-1-4"
                },
                {
                    "id": 5,
                    "name": "Org Membership",
                    "description": "<div>Org Membership</div>",
                    "customerType": "",
                    "displayOrder": 40,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "50.0000",
                    "productCode": "SB-1-5"
                },
                {
                    "id": 6,
                    "name": "Member Employee",
                    "description": "<div>Member Employee</div>",
                    "customerType": "",
                    "displayOrder": 50,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "50.0000",
                    "productCode": "SB-1-6"
                },
                {
                    "id": 7,
                    "name": "Contact Membership 535",
                    "description": "<div>Contact Membershiper</div>",
                    "customerType": "",
                    "displayOrder": 60,
                    "renewalType": "",
                    "renewalDay": 1,
                    "renewalMonth": 1,
                    "amount": "43.0000",
                    "productCode": "SB-1-9"
                }
            ],
            "links": {
                "first": "https://ma.memberbase-test.com/api/v1/membership-types?page=1",
                "last": "https://ma.memberbase-test.com/api/v1/membership-types?page=1",
                "prev": null,
                "next": null
            },
            "meta": {
                "current_page": 1,
                "from": 1,
                "last_page": 1,
                "links": [
                    {
                        "url": null,
                        "label": "pagination.previous",
                        "active": false
                    },
                    {
                        "url": "https://ma.memberbase-test.com/api/v1/membership-types?page=1",
                        "label": "1",
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "pagination.next",
                        "active": false
                    }
                ],
                "path": "https://ma.memberbase-test.com/api/v1/membership-types",
                "per_page": 15,
                "to": 7,
                "total": 7
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
