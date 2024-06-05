namespace Subjects {
    export interface TeacherI {
        experienceTeachingReact?: number;
    }
    export class React extends Subject{
        getRequirements() : string {
            return 'Here is the list of requirements for React';
        }
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
