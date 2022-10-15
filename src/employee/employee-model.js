class Employee {
  constructor(employeeAndScheduleString) {
    this.name = this._extractEmployeeName(employeeAndScheduleString)
    this.workedSchedule = this._extractEmployeeWorkedSchedule(
      employeeAndScheduleString
    )
  }

  _extractEmployeeName(employeeAndScheduleString) {
    return employeeAndScheduleString.split('=')[0]
  }

  _extractEmployeeWorkedSchedule(employeeAndScheduleString) {
    const scheduleString = employeeAndScheduleString.split('=')[1]
    const scheduleArrayDividedByDayStrings = scheduleString.split(',')
    const schedule = scheduleArrayDividedByDayStrings.map((dayString) => {
      const day = dayString.substring(0, 2)
      const timeIntervalString = dayString.substring(2)
      const startTimeString = timeIntervalString.split('-')[0]
      const endTimeString = timeIntervalString.split('-')[1]
      const startHour = +startTimeString.split(':')[0]
      const startMinute = +startTimeString.split(':')[1]
      const endHour = +endTimeString.split(':')[0]
      const endMinute = +endTimeString.split(':')[1]
      return {
        day,
        startHour,
        startMinute,
        endHour,
        endMinute,
      }
    })
    return schedule
  }
}

module.exports = Employee
