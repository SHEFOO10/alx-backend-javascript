/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    export const cTeacher = new Teacher('Sherif', 'Hamdy', 10);

    cpp.teacher = cTeacher;
    java.teacher = cTeacher;
    react.teacher = cTeacher;

    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
