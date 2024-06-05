/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        constructor() {
            
        }
        set teacher(teacher: TeacherI) {
            this.teacher = teacher;
        }
    }
}