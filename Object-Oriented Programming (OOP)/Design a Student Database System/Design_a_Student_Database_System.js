// Student Database System JavaScript Code

// Student object initialization
let students = {};

// Function to add a new student
function addStudent(id, name, department, cgpa) {
    students[id] = {
        name: name,
        department: department,
        cgpa: cgpa
    };
    console.log("Student added successfully!");
}

// Function to display all students
function displayStudents() {
    console.log("\nAll Students:");
    for (let id in students) {
        console.log(`ID: ${id}`);
        console.log(`Name: ${students[id].name}`);
        console.log(`Department: ${students[id].department}`);
        console.log(`CGPA: ${students[id].cgpa}`);
        console.log("------------------------");
    }
}

// Function to update a student's information
function updateStudent(id, newName, newDept, newCgpa) {
    if (students[id]) {
        students[id].name = newName;
        students[id].department = newDept;
        students[id].cgpa = newCGPA;
        console.log("Student updated successfully!");
    } else {
        console.log("Student not found!");
    }
}

// Function to delete a student
function deleteStudent(id) {
    if (students[id]) {
        delete students[id];
        console.log("Student deleted successfully!");
    } else {
        console.log("Student not found!");
    }
}

// Example usage:
addStudent("S001", "Antor Ahmed", "CSE", 3.8);
addStudent("S002", "John Doe", "EEE", 3.5);
displayStudents();