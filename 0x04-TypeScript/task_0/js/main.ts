interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Loay',
  lastName: 'Al-Said',
  age: 30,
  location: 'Cairo, Egypt',
};

const student2: Student = {
  firstName: 'Algorithmus',
  lastName: '-',
  age: 50,
  location: 'Khwarism',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table') as HTMLTableElement;
const headerRow = document.createElement('tr') as HTMLTableRowElement;
const rows: string[] = ['First Name', 'Location'];
rows.map((value: string) => {
  const th = document.createElement('th') as HTMLElement;
  th.textContent = value as string;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);
studentsList.map((value: Student) => {
  const row = document.createElement('tr') as HTMLTableRowElement;
  const th1 = document.createElement('th') as HTMLElement;
  const th2 = document.createElement('th') as HTMLElement;
  th1.textContent = value.firstName;
  th2.textContent = value.location;
  row.appendChild(th1);
  row.appendChild(th2);
  table.appendChild(row);
})
document.body.appendChild(table);
