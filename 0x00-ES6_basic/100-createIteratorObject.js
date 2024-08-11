export default function createIteratorObject(report) {
  /**
   * This is not a good solution at all,
   * because I'm using in line 9 "report" instead of "this", which means
   * iam not pointing at the report object, but iam just taking a snapshot of it
   * and using the values, which make it invaluable that i assign the iterable to the report
   * and return the report itself,
   *
   *
   * I will try a walk around this now
   */
  //   const CustomIterable = {
  //     [Symbol.iterator]: () => {
  //       const employees = [];
  //       Object.values(report.allEmployees).forEach((departmentEmployees) => {
  //         employees.push(...departmentEmployees);
  //       });
  //       let step = 0;
  //       return {
  //         next() {
  //           return {
  //             value: employees[step],
  //             done: step++ >= employees.length,
  //           };
  //         },
  //       };
  //     },
  //   };

  //   Object.assign(report, CustomIterable);
  //   return report;
  /** ****************************************************** */
  /**
   * Another one that did actually work but I noticed that iam using report there.. 😅🙂
   * Which is not a problem at all, That's Why i assinged the report (the snapshot)
   *  to CustomIterable
   */

  //   const CustomIterable = Object();
  //   Object.assign(CustomIterable, report);

  //   CustomIterable[Symbol.iterator] = () => {
  //     const employees = [];
  //     Object.values(report.allEmployees).forEach((departmentEmployees) => {
  //       employees.push(...departmentEmployees);
  //     });
  //     let step = 0;
  //     return {
  //       next() {
  //         return {
  //           value: employees[step],
  //           done: step++ >= employees.length,
  //         };
  //       },
  //     };
  //   };

  /** ************************** */
  /**
   * My final solution!
   */
  const CustomIterable = {
    ...report,

    [Symbol.iterator]() {
      const employees = [];
      Object.values(this.allEmployees).forEach((departmentEmployees) => {
        employees.push(...departmentEmployees);
      });

      let step = 0;
      return {
        next() {
          return {
            value: employees[step],
            done: step++ >= employees.length, // eslint-disable-line no-plusplus
          };
        },
      };
    },
  };

  return CustomIterable;
}
