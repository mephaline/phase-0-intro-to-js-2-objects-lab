// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
   
    const updatedEmployee = { ...employee };

    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }
  const employee = {
    name: "John",
    age: 30,
    department: "HR",
  };
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
  }
function deleteFromEmployeeByKey(employee, key) {

    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
    return clonedEmployee;
    }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    if (employee.hasOwnProperty(key))
        delete employee[key];
        return employee;
        }