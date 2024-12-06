import { NextResponse } from "next/server";

export async function POST() {
    try {
        const data = {
            "data": {
                "user": {
                    "id": "12190299383",
                    "firstname": "David",
                    "lastname": "Dams",
                    "age": 30,
                    "address": "Manchester",
                    "email": "daviddams@hotmail.com",
                    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmVhMjM0MTYwNmMwMjY5YTIwODg1NDc4YzJkMTk2NWVhNGM1NWU4ZTA1YzUwNzdmOWUzNWE2N2QzODFmZTE0ODk4NDA4OWEyYjNmMWVhZTUiLCJpYXQiOjE3MzI4MTE3OTguNTA1MjI5LCJuYmYiOjE3MzI4MTE3OTguNTA1MjMzLCJleHAiOjE4OTA1NzgxOTguNDkwMzEsInN1YiI6IiIsInNjb3BlcyI6WyIqIl19.TPkEJR-QzBwUdEdYPbjLQHWrEWmXYEBGtLfDG25FiQpbmLAaPKYCNoezp2OeHhWuXET-OYkpcaqpGG4pJlOweVJJcEt5DPVZc8XnG-BSdCOvCG11uQG8CWo4q0_E98CMH_qfSUB_qNLu4ygE7ZXsOVagpmly5uJPdbiu6xBQYojqaxCpoom3IRED4xei87_n8zENH_MVflwAu8E9z33HCpBkgPXauA6YAFBil4ow62MiAKUl50fw6xHzfQkJIx-HW_JZdFmjj0iCLNEHwHkY3Dy6HXAVjERgO9DQdsYG5RIAc6PSx8pd3s1ZT4XVWw5rXriLWR8py3mJnouC5G3qtensBlLvGUm3etc3oHsmzkf8Iu8m59n1HDXvU7XLkJJK53uH1e2t1hR2WCZxSmPu2PM0OmPeSgXXY59x0NY0YIgb1_RNA2_r1zwE66rK6h71fcn-xbcSsKHBe3ufcJeyxyRmNSgyUHwrl7FmhH1ptlP63QFSKKGt5MdhBywHigirlTWab3B3WPuF_X6XbHVaDd8ksbNEjyKldH01fHmZnCyJLpMCumTslRCNneVtufw1dcKgo0D-O1Ur1EVZcmxOlPs2pDtv6AJE_fEIFlc7wlNp5tl0U2TP6AmdwQKfr0-CYPXC6CUWZHWx3g8ISgQsskMUBfUzh8lk6m3rjn4QBJk"
                },
                "message": "success"
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
