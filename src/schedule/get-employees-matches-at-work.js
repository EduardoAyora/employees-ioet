const Employee = require('../employee/employee-model')

const getEmployeesMatchesAtWork = (employeesAndScheduleString) => {
  const employeesAndScheduleArrayOfStrings =
    getEmployeesAndScheduleArrayOfStrings(employeesAndScheduleString)
  const employeesAndSchedule = employeesAndScheduleArrayOfStrings.map(
    (employeeAndScheduleString) => new Employee(employeeAndScheduleString)
  )
  const allEmployeesCombinationsWithNumberOfMatches =
    employeesAndSchedule.reduce(
      (employeePairs, employeeA, index) =>
        employeePairs.concat(
          employeesAndSchedule.slice(index + 1).map((employeeB) => {
            const numberOfMatchesInThePair = getCountOfMatches(
              employeeA.workedSchedule,
              employeeB.workedSchedule
            )
            return `${employeeA.name}-${employeeB.name}: ${numberOfMatchesInThePair}`
          })
        ),
      []
    )
  const allEmployeesCombinationsWithNumberOfMatchesString =
    allEmployeesCombinationsWithNumberOfMatches.join('\n')
  return allEmployeesCombinationsWithNumberOfMatchesString
}

const getEmployeesAndScheduleArrayOfStrings = (employeesAndScheduleString) => {
  return employeesAndScheduleString
    .split('\n')
    .map((employeeAndScheduleString) => employeeAndScheduleString.trim())
}

const getCountOfMatches = (
  workedScheduleEmployeeA,
  workedScheduleEmployeeB
) => {
  const numberOfMatches = workedScheduleEmployeeA.reduce(
    (numberOfCoincidences, dayScheduleEmployeeA) => {
      const dayScheduleEmployeeB = workedScheduleEmployeeB.find(
        ({ day }) => day === dayScheduleEmployeeA.day
      )
      if (!dayScheduleEmployeeB) return numberOfCoincidences
      if (isMatchInTimes(dayScheduleEmployeeA, dayScheduleEmployeeB))
        return numberOfCoincidences + 1
      else return numberOfCoincidences
    },
    0
  )
  return numberOfMatches
}

const isMatchInTimes = (dayScheduleEmployeeA, dayScheduleEmployeeB) => {
  const employeeAStartHour = dayScheduleEmployeeA.startHour
  const employeeAStartMinute = dayScheduleEmployeeA.startMinute
  const employeeAEndHour = dayScheduleEmployeeA.endHour
  const employeeAEndMinute = dayScheduleEmployeeA.endMinute
  const employeeBStartHour = dayScheduleEmployeeB.startHour
  const employeeBStartMinute = dayScheduleEmployeeB.startMinute
  const employeeBEndHour = dayScheduleEmployeeB.endHour
  const employeeBEndMinute = dayScheduleEmployeeB.endMinute

  if (
    employeeAStartHour >= employeeBStartHour &&
    employeeAStartHour <= employeeBEndHour
  )
    return true
  if (
    employeeAEndHour >= employeeBStartHour &&
    employeeAEndHour <= employeeBEndHour
  )
    return true
  if (
    employeeBStartHour >= employeeAStartHour &&
    employeeBStartHour <= employeeAEndHour
  )
    return true
  if (
    employeeBEndHour >= employeeAStartHour &&
    employeeBEndHour <= employeeAEndHour
  )
    return true
  return false
}

exports.getEmployeesMatchesAtWork = getEmployeesMatchesAtWork
exports.getEmployeesAndScheduleArrayOfStrings =
  getEmployeesAndScheduleArrayOfStrings
exports.isMatchInTimes = isMatchInTimes
exports.getCountOfMatches = getCountOfMatches
