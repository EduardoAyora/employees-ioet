const getEmployeesMatchesAtWork = (employeesAndScheduleString) => {
  const employeesAndScheduleArrayOfStrings = getEmployeesAndScheduleArrayOfStrings(
    employeesAndScheduleString
  )
}

const getEmployeesAndScheduleArrayOfStrings = (employeesAndScheduleString) => {
  return employeesAndScheduleString
    .split('\n')
    .map((employeeAndScheduleString) => employeeAndScheduleString.trim())
}

exports.getEmployeesMatchesAtWork = getEmployeesMatchesAtWork
exports.getEmployeesAndScheduleArrayOfStrings = getEmployeesAndScheduleArrayOfStrings
