
// These appear to be the correct URLS, need to put in year and term for the schedule
// export const seasCoursesListURL = 'https://computingapps.seas.harvard.edu/course-planner/api/course-instances/multi-year-plan'
// export const seasCoursesScheduleURL = 'https://computingapps.seas.harvard.edu/course-planner/api/course-instances/schedule?year=2024&&term=SPRING';
export const seasCoursesListURL = 'https://info.seas.harvard.edu/courses/api/courses/public';
export const seasCoursesScheduleURL = 'https://info.seas.harvard.edu/courses/api/schedule/courses';

export const hbsCoursesJson = require('./static/courses/HBS-2023.json');
export const seasCoursesListJson = require('./static/courses/SEAS-2023-List.json');
export const seasCoursesScheduleJson = require('./static/courses/SEAS-2023-Schedule.json');
export const requiredCoursesJson = require('./static/courses/MSMBA-ENG-Required-2023.json');

export const mitJsons = [
    require('./static/courses/MIT-2023/MIT-2.json'),
    require('./static/courses/MIT-2023/MIT-6.json'),
    require('./static/courses/MIT-2023/MIT-16.json'),
    require('./static/courses/MIT-2023/MIT-18.json')];

export const currentAcademicYear = 2024;
export const hourFormat = "HH:mm";
