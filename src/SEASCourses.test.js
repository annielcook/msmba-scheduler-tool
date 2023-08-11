import {
    exportedForTesting
} from './SEASCourses';

const {
    getCompleteRawCoursesInfo,
    getRelevantSemestersInfo,
    parseCourse
} = exportedForTesting;

const dummyCourseList = [{
    "id": "8a55f601-57ae-435b-8cae-4df4ddc611a7",
    "catalogPrefix": "AC",
    "catalogNumber": "AC 207",
    "title": "Systems Development for Computational Science",
    "sameAsId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
    "semesters": [{
        "id": "e52e2cef-cf3e-4914-bf82-b846222c2b5b",
        "calendarYear": "2023",
        "academicYear": "2024",
        "term": "FALL",
        "termOrder": 1,
        "instance": {
            "id": "b90aa451-b510-472b-9bdd-a8e9d090eba7",
            "courseId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
            "faculty": [{
                "id": "266dd997-1f5b-4af0-9bf1-92e0eb6c76b8",
                "displayName": "Becker Troncoso, Ignacio",
                "notes": "",
                "instructorOrder": 0
            }]
        }
    }, {
        "id": "8d43d6cf-9280-435e-a566-1401557cf988",
        "calendarYear": "2024",
        "academicYear": "2024",
        "term": "SPRING",
        "termOrder": 2,
        "instance": {
            "id": "c2d614a2-0f9c-4bb4-a558-95de6fff4a3f",
            "courseId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
            "faculty": []
        }
    }, {
        "id": "a4908206-b425-4c71-9d34-901f973bb3c5",
        "calendarYear": "2024",
        "academicYear": "2025",
        "term": "FALL",
        "termOrder": 1,
        "instance": {
            "id": "1cd177cb-1516-4f7a-af25-c932d340eba5",
            "courseId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
            "faculty": []
        }
    }, {
        "id": "40cec0c8-b6a9-427f-8c6e-46d92417044c",
        "calendarYear": "2025",
        "academicYear": "2025",
        "term": "SPRING",
        "termOrder": 2,
        "instance": {
            "id": "74e97bde-8a83-4a77-a232-d95501908222",
            "courseId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
            "faculty": []
        }
    }, {
        "id": "b23e5759-4e35-41f8-9a99-01064bc789a7",
        "calendarYear": "2025",
        "academicYear": "2026",
        "term": "FALL",
        "termOrder": 1,
        "instance": {
            "id": "b1662484-946d-4c3e-b584-f973b68928dd",
            "courseId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
            "faculty": []
        }
    }, {
        "id": "be8e81de-d370-4d9e-9d42-68a9459e5496",
        "calendarYear": "2026",
        "academicYear": "2026",
        "term": "SPRING",
        "termOrder": 2,
        "instance": {
            "id": "d8bf30e1-2a75-407b-9f51-7fc890bc1366",
            "courseId": "df1b5916-9345-4c80-972c-d9bb7bd89d35",
            "faculty": []
        }
    }]
}, {
    "id": "ce74b371-cf13-4108-a61b-993191079429",
    "catalogPrefix": "AC",
    "catalogNumber": "AC 209b",
    "title": "Data Science 2: Advanced Topics in Data Science",
    "sameAsId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
    "semesters": [{
        "id": "e52e2cef-cf3e-4914-bf82-b846222c2b5b",
        "calendarYear": "2023",
        "academicYear": "2024",
        "term": "FALL",
        "termOrder": 1,
        "instance": {
            "id": "d6a1c1c4-0a42-4509-bbb3-dc5a7b50bbaf",
            "courseId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
            "faculty": []
        }
    }, {
        "id": "8d43d6cf-9280-435e-a566-1401557cf988",
        "calendarYear": "2024",
        "academicYear": "2024",
        "term": "SPRING",
        "termOrder": 2,
        "instance": {
            "id": "78568e90-1a00-49f9-b9f0-82a1a41eaaf5",
            "courseId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
            "faculty": [{
                "id": "6d9e2a9d-e8c4-48bd-963b-bdffa532ba40",
                "displayName": "Protopapas, Pavlos",
                "notes": null,
                "instructorOrder": 0
            }, {
                "id": "6de9b067-277f-4047-9236-90507c5748aa",
                "displayName": "Young, Alex",
                "notes": "",
                "instructorOrder": 1
            }]
        }
    }, {
        "id": "a4908206-b425-4c71-9d34-901f973bb3c5",
        "calendarYear": "2024",
        "academicYear": "2025",
        "term": "FALL",
        "termOrder": 1,
        "instance": {
            "id": "955d895f-1b17-42c0-a0b4-4293d14f76f4",
            "courseId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
            "faculty": []
        }
    }, {
        "id": "40cec0c8-b6a9-427f-8c6e-46d92417044c",
        "calendarYear": "2025",
        "academicYear": "2025",
        "term": "SPRING",
        "termOrder": 2,
        "instance": {
            "id": "e94935b6-403c-4286-a867-79aef3bbf992",
            "courseId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
            "faculty": []
        }
    }, {
        "id": "b23e5759-4e35-41f8-9a99-01064bc789a7",
        "calendarYear": "2025",
        "academicYear": "2026",
        "term": "FALL",
        "termOrder": 1,
        "instance": {
            "id": "ce8a19e5-8a27-4a6b-824f-caa593e9f6a9",
            "courseId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
            "faculty": []
        }
    }, {
        "id": "be8e81de-d370-4d9e-9d42-68a9459e5496",
        "calendarYear": "2026",
        "academicYear": "2026",
        "term": "SPRING",
        "termOrder": 2,
        "instance": {
            "id": "185835c6-3b24-490f-b787-9a68315a4092",
            "courseId": "de3531df-1f07-4a1c-8753-cbd5641bf0f2",
            "faculty": []
        }
    }]
}];

const dummyCourseTimes = [{
    "id": "ACTUE14151530FALL2023",
    "coursePrefix": "AC",
    "weekday": "TUE",
    "startHour": 14,
    "startMinute": 15,
    "endHour": 15,
    "endMinute": 30,
    "duration": 75,
    "courses": [{
        "id": "c176d2be-9873-4bb8-bd5c-36a51e21d5bc",
        "instanceId": "b90aa451-b510-472b-9bdd-a8e9d090eba7",
        "courseNumber": "207",
        "isUndergraduate": false,
        "campus": "Allston",
        "room": "SEC 1.321"
    }]
}, {
    "id": "ACTHU14151530FALL2023",
    "coursePrefix": "AC",
    "weekday": "THU",
    "startHour": 14,
    "startMinute": 15,
    "endHour": 15,
    "endMinute": 30,
    "duration": 75,
    "courses": [{
        "id": "e3cc8d9d-1d1c-4f8c-ba0d-f90f6456b7f2",
        "instanceId": "b90aa451-b510-472b-9bdd-a8e9d090eba7",
        "courseNumber": "207",
        "isUndergraduate": false,
        "campus": "Allston",
        "room": "SEC 1.321"
    }]
}, {
    "id": "ACMON09451100SPRING2024",
    "coursePrefix": "AC",
    "weekday": "MON",
    "startHour": 9,
    "startMinute": 45,
    "endHour": 11,
    "endMinute": 0,
    "duration": 75,
    "courses": [{
        "id": "dc775ad9-4843-47cb-a658-140a331a618e",
        "instanceId": "78568e90-1a00-49f9-b9f0-82a1a41eaaf5",
        "courseNumber": "209b",
        "isUndergraduate": false,
        "campus": "Allston",
        "room": "SEC 1.321"
    }]
}, {
    "id": "ACWED09451100SPRING2024",
    "coursePrefix": "AC",
    "weekday": "WED",
    "startHour": 9,
    "startMinute": 45,
    "endHour": 11,
    "endMinute": 0,
    "duration": 75,
    "courses": [{
        "id": "4f41c4fa-44ef-4903-98c8-9c57b5c9e9c9",
        "instanceId": "78568e90-1a00-49f9-b9f0-82a1a41eaaf5",
        "courseNumber": "209b",
        "isUndergraduate": false,
        "campus": "Allston",
        "room": "SEC 1.321"
    }]
}, {
    "id": "ACFRI09451100SPRING2024",
    "coursePrefix": "AC",
    "weekday": "FRI",
    "startHour": 9,
    "startMinute": 45,
    "endHour": 11,
    "endMinute": 0,
    "duration": 75,
    "courses": [{
        "id": "b7e4c36c-62e9-433a-9c8d-e5adc9c56c51",
        "instanceId": "78568e90-1a00-49f9-b9f0-82a1a41eaaf5",
        "courseNumber": "209b",
        "isUndergraduate": false,
        "campus": "Allston",
        "room": "SEC 1.321"
    }]
}];

test('Get full course info', async () => {
    const result = getCompleteRawCoursesInfo(dummyCourseList, dummyCourseTimes);

    const columns = Object.keys(result[0]);
    expect(columns).toEqual(
        expect.arrayContaining(["id", "catalogPrefix", "catalogNumber", "title", "sameAsId",
            "semesters", "semesterTimes", "isUndergraduate"
        ])
    );
});

test('Get course semesters info', () => {
    const toTest = getCompleteRawCoursesInfo(dummyCourseList, dummyCourseTimes);

    const resultOfferedFall = getRelevantSemestersInfo(toTest[0]);
    const resultOfferedSpring = getRelevantSemestersInfo(toTest[1]);

    expect(resultOfferedSpring.length).toEqual(1);
    expect(resultOfferedFall.length).toEqual(1);
    expect(resultOfferedFall[0].instructors).toEqual(
        expect.arrayContaining(dummyCourseList[0].semesters[0].instance.faculty)
    );
    expect(resultOfferedSpring[0].instructors).toEqual(
        expect.arrayContaining(dummyCourseList[1].semesters[1].instance.faculty)
    );
    // Didnt test times data and probably could add but a bit multifaceted

});

test('Parse course', () => {
    const toTest = getCompleteRawCoursesInfo(dummyCourseList, dummyCourseTimes);
    const resultSpring = parseCourse(toTest[1]);
    expect(resultSpring.length).toEqual(1);
    const resultSpringInfo = resultSpring[0];
    expect(resultSpringInfo.semester).toEqual("S");
    expect(resultSpringInfo.school).toEqual("SEAS");
    expect(resultSpringInfo.prof).toEqual("Protopapas, Pavlos, Young, Alex");
    expect(resultSpringInfo.name).toEqual(`${dummyCourseList[1].catalogNumber} ${dummyCourseList[1].title}`);
    expect(resultSpringInfo.id).toEqual(`SEAS-SPRING-${dummyCourseList[1].catalogNumber.replace(' ', '-')}`);
    expect(resultSpringInfo.times).toEqual(
        expect.arrayContaining([{
            day: 0,
            startHour: "09:45",
            endHour: "11:00"
        }, {
            day: 2,
            startHour: "09:45",
            endHour: "11:00"
        },
        {
            day: 4,
            startHour: "09:45",
            endHour: "11:00"
        }])
    )
    expect(resultSpringInfo.timeText).toEqual("Mon, Wed, Fri 09:45-11:00");
});