interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Array<Student> = [
    {
        firstName: 'Sherif',
        lastName: 'Hamdy',
        age: 19,
        location: 'Alexandria',
    },
    {
        firstName: 'Hager',
        lastName: 'Hamada',
        age: 19,
        location: 'Alexandria',
    },
];

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');
const tableHeading = document.createElement('tr');
for (let i = 0; i < 2; i++) {
    const head = ['firstName', 'location']
    let headItem = document.createElement('th');
    headItem.innerText = head[i];
    tableHeading.appendChild(headItem);
}
table.appendChild(tableHeading)

studentsList.forEach((student) => {
    const tableData = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');

    firstName.innerText = student.firstName;
    location.innerText = student.location;

    tableData.append(firstName, location);
    table.appendChild(tableData)
});
body.appendChild(table);