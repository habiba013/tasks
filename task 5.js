class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (value.includes("@")) {
            this.#email = value;
        } else {
            console.log("Invalid Email");
        }
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        if (value > 0) {
            this.#id = value;
        } else {
            console.log("Invalid ID");
        }
    }

    describeRole() {
        console.log("School Member");
    }
}

class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(member.name + " added.");
    }

    removeMember(id) {
        this.members = this.members.filter(member => member.id !== id);
        console.log("Member removed.");
    }

    listMembers() {
        this.members.forEach(member => {
            console.log(member.name);
        });
    }

    describeRole() {
        console.log("I am the Principal.");
    }
}

class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.grades = [];
    }

    gradeStudent(studentName, grade) {
        this.grades.push({
            studentName,
            grade
        });
    }

    listGrades() {
        this.grades.forEach(student => {
            console.log(student.studentName + ": " + student.grade);
        });
    }

    describeRole() {
        console.log("I teach " + this.subject);
    }
}

class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }

    enroll(subject) {
        this.subjects.push(subject);
    }

    viewSubjects() {
        console.log(this.subjects);
    }

    describeRole() {
        console.log("I am a Student.");
    }
}

const principal = new Principal("Ahmed", "ahmed@gmail.com", 1);
const teacher = new Teacher("Sara", "sara@gmail.com", 2, "JavaScript");
const student = new Student("Ali", "ali@gmail.com", 3);

principal.addMember(teacher);
principal.addMessmber(student);

principal.listMembers();

teacher.gradeStudent("Ali", 95);
teacher.gradeStudent("Omar", 88);

teacher.listGrades();

student.enroll("JavaScript");
student.enroll("Node.js");

student.viewSubjects();

const members = [principal, teacher, student];

members.forEach(member => {
    member.describeRole();
});