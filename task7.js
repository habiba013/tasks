const fs = require("fs");

let grades = [];

if (fs.existsSync("grades.json")) {
    grades = JSON.parse(fs.readFileSync("grades.json"));
}

function saveGrades() {
    fs.writeFileSync("grades.json", JSON.stringify(grades, null, 2));
}

function addGrade(id, name, subject, grade) {
    grades.push({
        id,
        name,
        subject,
        grade
    });

    saveGrades();
    console.log("Grade added.");
}

function readGrades() {
    console.log(grades);
}

function updateGrade(id, newGrade) {
    const student = grades.find(student => student.id === id);

    if (student) {
        student.grade = newGrade;
        saveGrades();
        console.log("Grade updated.");
    } else {
        console.log("Student not found.");
    }
}

function deleteGrade(id) {
    const index = grades.findIndex(student => student.id === id);

    if (index !== -1) {
        grades.splice(index, 1);
        saveGrades();
        console.log("Grade deleted.");
    } else {
        console.log("Student not found.");
    }
}

addGrade(1, "Ali", "JavaScript", 95);
addGrade(2, "Sara", "Node.js", 88);

readGrades();

updateGrade(2, 92);

readGrades();

deleteGrade(1);

readGrades();ss