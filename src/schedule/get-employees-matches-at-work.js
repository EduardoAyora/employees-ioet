const Employee = require('../employee/employee-model')

const getEmployeesMatchesAtWork = (employeesAndScheduleString) => {
  const employeesAndScheduleArrayOfStrings =
    getEmployeesAndScheduleArrayOfStrings(employeesAndScheduleString)
  const employeesAndSchedule = employeesAndScheduleArrayOfStrings.map(
    (employeeAndScheduleString) => new Employee(employeeAndScheduleString)
  )
  const employeesMatches = employeesAndSchedule.reduce(
    (employeePairs, employeeA, index) =>
      employeePairs.concat(
        employeesAndSchedule.slice(index + 1).map((employeeB) => {
          const numberOfMatchesInThePair = employeeA.workedSchedule.reduce(
            (numberOfCoincidences, dayScheduleEmployeeA) => {
              const dayScheduleEmployeeB = employeeB.workedSchedule.find(
                ({ day }) => day === dayScheduleEmployeeA.day
              )
              if (!dayScheduleEmployeeB) return numberOfCoincidences
              if (isMatchInTime(dayScheduleEmployeeA, dayScheduleEmployeeB))
                return numberOfCoincidences + 1
              else return numberOfCoincidences
            },
            0
          )
          return `${employeeA.name}-${employeeB.name}: ${numberOfMatchesInThePair}`
        })
      ),
    []
  )
  console.log(employeesMatches)
  return employeesMatches
}

const getEmployeesAndScheduleArrayOfStrings = (employeesAndScheduleString) => {
  return employeesAndScheduleString
    .split('\n')
    .map((employeeAndScheduleString) => employeeAndScheduleString.trim())
}

const isMatchInTime = (dayScheduleEmployeeA, dayScheduleEmployeeB) => {
  const employeeAStartHour = dayScheduleEmployeeA.startHour
  const employeeAStartMinute = dayScheduleEmployeeA.startMinute
  const employeeAEndHour = dayScheduleEmployeeA.endHour
  const employeeAEndMinute = dayScheduleEmployeeA.endMinute
  const employeeBStartHour = dayScheduleEmployeeB.startHour
  const employeeBStartMinute = dayScheduleEmployeeB.startMinute
  const employeeBEndHour = dayScheduleEmployeeB.endHour
  const employeeBEndMinute = dayScheduleEmployeeB.endMinute

  if (
    employeeAStartHour > employeeBStartHour &&
    employeeAStartHour < employeeBEndHour
  )
    return true
  if (
    employeeAEndHour > employeeBStartHour &&
    employeeAEndHour < employeeBEndHour
  )
    return true
  if (
    employeeBStartHour > employeeAStartHour &&
    employeeBStartHour < employeeAEndHour
  )
    return true
  if (
    employeeBEndHour > employeeAStartHour &&
    employeeBEndHour < employeeAEndHour
  )
    return true
  return false
}

exports.getEmployeesMatchesAtWork = getEmployeesMatchesAtWork
exports.getEmployeesAndScheduleArrayOfStrings =
  getEmployeesAndScheduleArrayOfStrings
exports.isMatchInTime = isMatchInTime
