import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = {
            "data": [
                {
                    "id": 1,
                    "name": "Mobile App",
                    "parentId": null,
                    "description": null,
                    "groupId": 1,
                    "createdAt": "2024-11-28T16:29:31.000000Z",
                    "updatedAt": "2024-11-28T16:29:31.000000Z"
                },
                {
                    "id": 2,
                    "name": "01. SCOTLAND",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:35:04.000000Z",
                    "updatedAt": "2024-11-29T09:35:04.000000Z"
                },
                {
                    "id": 3,
                    "name": "04. WALES",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:37:32.000000Z",
                    "updatedAt": "2024-11-29T09:37:32.000000Z"
                },
                {
                    "id": 4,
                    "name": "05. MIDLANDS",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:38:48.000000Z",
                    "updatedAt": "2024-11-29T09:38:48.000000Z"
                },
                {
                    "id": 5,
                    "name": "06. CENTRAL LONDON",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:39:56.000000Z",
                    "updatedAt": "2024-11-29T09:39:56.000000Z"
                },
                {
                    "id": 6,
                    "name": "AYRSHIRE",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:40:31.000000Z",
                    "updatedAt": "2024-11-29T09:40:31.000000Z"
                },
                {
                    "id": 8,
                    "name": "DYFED POWYS",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:41:48.000000Z",
                    "updatedAt": "2024-11-29T09:41:48.000000Z"
                },
                {
                    "id": 9,
                    "name": "LEICESTERSHIRE",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:42:15.000000Z",
                    "updatedAt": "2024-11-29T09:42:15.000000Z"
                },
                {
                    "id": 10,
                    "name": "LINCOLNSHIRE",
                    "parentId": 1,
                    "description": null,
                    "groupId": 2,
                    "createdAt": "2024-11-29T09:43:01.000000Z",
                    "updatedAt": "2024-11-29T09:43:01.000000Z"
                }
            ],
            "links": {
                "first": "https://ma.memberbase-test.com/api/v1/business-units?page=1",
                "last": "https://ma.memberbase-test.com/api/v1/business-units?page=1",
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
                        "url": "https://ma.memberbase-test.com/api/v1/business-units?page=1",
                        "label": "1",
                        "active": true
                    },
                    {
                        "url": null,
                        "label": "pagination.next",
                        "active": false
                    }
                ],
                "path": "https://ma.memberbase-test.com/api/v1/business-units",
                "per_page": 25,
                "to": 9,
                "total": 9
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
