export default function createIteratorObject(report) {
  const departments = report.allEmployees;
  const employees = [];
  Object.values(departments).forEach((departmentEmployees) => {
    employees.push(...departmentEmployees);
  });

  const iterable = {
    [Symbol.iterator]() {
      let step = 0;
      return {
        next() {
          return {
            value: employees[step],
            done: step++ >= employees.length,
          };
        },
      };
    },
  };

  return iterable;
}
