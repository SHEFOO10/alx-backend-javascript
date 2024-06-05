
namespace Subjects {
    export interface TeacherI {
        firstName: string;
        lastName: string;
    }
    export class Teacher implements TeacherI {
        firstName: string;
        lastName: string;
        experienceTeachingC: number;
        experienceTeachingJava?: number;
        experienceTeachingReact?: number;

        constructor(firstName: string, lastName: string, experienceInC: number) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.experienceTeachingC = experienceInC;
        }
    }
}