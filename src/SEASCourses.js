import {
    currentAcademicYear,
    seasCoursesListURL,
    seasCoursesScheduleURL
} from "./Consts";
import getTimeText from "./CoursesTimeText";
import {
    getJson
} from "./IO";

const days = {
    MON: 0,
    TUE: 1,
    WED: 2,
    THU: 3,
    FRI: 4,
}

function getCompleteRawCoursesInfo(rawCoursesList, rawCoursesSchedule) {
    let completeCoursesMap = {};
    for (const courseInfo of rawCoursesList) {
        completeCoursesMap[courseInfo.catalogNumber] = {
            ...courseInfo
        };
    }
    for (const courseTimeslot of rawCoursesSchedule) {
        const prefix = courseTimeslot.coursePrefix;
        for (const course of courseTimeslot.courses) {
            const catalogNumber = `${prefix} ${course.courseNumber}`;
            if (catalogNumber in completeCoursesMap) {
                if (completeCoursesMap[catalogNumber].semesterTimes) {
                    // Add additional weekdays
                    const daysOffered = completeCoursesMap[catalogNumber].semesterTimes[0].weekday;
                    completeCoursesMap[catalogNumber].semesterTimes[0].weekday = [...daysOffered, courseTimeslot.weekday];
                } else {
                    let semesterTime = {
                        ...courseTimeslot,
                        weekday: [courseTimeslot.weekday],
                        catalogNumber: catalogNumber,
                        term: parseInt(courseTimeslot.id.slice(-4)) === currentAcademicYear ? "SPRING" : "FALL",
                    };
                    delete semesterTime.courses;

                    completeCoursesMap[catalogNumber].semesterTimes = [semesterTime];
                }

                completeCoursesMap[catalogNumber].isUndergraduate = course.isUndergraduate;
            }
        }
    }
    return Object.values(completeCoursesMap).filter(e => ("semesterTimes" in e));
}

function getRelevantSemestersInfo(courseData) {
    let semestersInfo = [{
        term: "FALL",
        instructors: [],
        times: []
    }, {
        term: "SPRING",
        instructors: [],
        times: []
    }, ];

    const instructorsFall = courseData.semesters.filter(e =>
        (e.instance.faculty.length !== 0 && parseInt(e.academicYear) === currentAcademicYear && e.term === semestersInfo[0].term));
    const instructorsSpring = courseData.semesters.filter(e =>
        (e.instance.faculty.length !== 0 && parseInt(e.academicYear) === currentAcademicYear && e.term === semestersInfo[1].term));

    if (instructorsFall.length > 0) {
        semestersInfo[0].instructors = instructorsFall[0].instance.faculty;
        semestersInfo[0].times = [courseData.semesterTimes[0]];
    }


    if (instructorsSpring.length > 0) {
        semestersInfo[1].instructors = instructorsSpring[0].instance.faculty;
        semestersInfo[1].times = [courseData.semesterTimes[0]];
    }

    return semestersInfo.filter(e => (e.instructors.length > 0));
}

function instructorsToString(instructorsList) {
    return instructorsList.map((instructor) => (`${instructor.displayName}`)).join(', ');
}

function parseTimes(timesList) {
    return timesList.map((time) => {
        const startHour = `${time.startHour < 10 ? "0" + time.startHour : time.startHour}
                            :${time.startMinute === 0 ? "00" : time.startMinute}`.replace(/[\s\n]/g, '');
        const endHour = `${time.endHour < 10 ? "0" + time.endHour : time.endHour}
                        :${time.endMinute === 0 ? "00" : time.endMinute}`.replace(/[\s\n]/g, '');
        return time.weekday.map((day) => {
            return {
                day: days[day],
                startHour: startHour,
                endHour: endHour
            }
        });
    }).flat();
}

function parseCourse(courseData) {
    const semestersInfos = getRelevantSemestersInfo(courseData);
    return semestersInfos.map((semesterInfo) => {
        const times = parseTimes(semesterInfo.times);
        const course = {
            id: `SEAS-${semesterInfo.term}-${courseData.catalogNumber.replace(' ', '-')}`,
            name: `${courseData.catalogNumber} ${courseData.title}`,
            school: "SEAS",
            prof: instructorsToString(semesterInfo.instructors),
            timeText: getTimeText(times),
            semester: semesterInfo.term.slice(0, 1),
            times: times
        };
        return course;
    });
}

export async function getSEASCoursesFromURL() {
    const rawCoursesList = await getJson(seasCoursesListURL);
    const rawCoursesSchedule = await getJson(seasCoursesScheduleURL);
    return getSEASCoursesFromJsons(rawCoursesList, rawCoursesSchedule);
}

export function getSEASCoursesFromJsons(coursesListJson, coursesScheduleJson) {
    const completeCoursesInfo = getCompleteRawCoursesInfo(coursesListJson, coursesScheduleJson);
    return completeCoursesInfo.map((course) => (parseCourse(course))).flat();
}

export const exportedForTesting = {
    parseCourse,
    getCompleteRawCoursesInfo,
    getRelevantSemestersInfo
};