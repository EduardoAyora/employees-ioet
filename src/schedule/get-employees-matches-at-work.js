const Employee = require('../employee/employee-model')

const getEmployeesMatchesAtWork = (employeesAndScheduleString) => {
  const employeesAndScheduleArrayOfStrings =
    getEmployeesAndScheduleArrayOfStrings(employeesAndScheduleString)
  const employeesAndSchedule = employeesAndScheduleArrayOfStrings.map(
    (employeeAndScheduleString) => new Employee(employeeAndScheduleString)
  )
}

const getEmployeesAndScheduleArrayOfStrings = (employeesAndScheduleString) => {
  return employeesAndScheduleString
    .split('\n')
    .map((employeeAndScheduleString) => employeeAndScheduleString.trim())
}

exports.getEmployeesMatchesAtWork = getEmployeesMatchesAtWork
exports.getEmployeesAndScheduleArrayOfStrings =
  getEmployeesAndScheduleArrayOfStrings
