const student1 = {
    firstName: 'Muhammad',
    lastName: 'Algorithmus',
    age: 25,
    location: 'Khwarizm',
};
const student2 = {
    firstName: 'Loay',
    lastName: 'Al-Said',
    age: 30,
    location: 'Egypt',
};
const studentsList = [student1, student2];
const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
