const {
  getEmployeesMatchesAtWork,
  getEmployeesAndScheduleArrayOfStrings,
  isMatchInTime,
} = require('./get-employees-matches-at-work')

describe('getEmployeesMatchesAtWork', () => {
  test('Should return ASTRID-RENE: 2 ASTRID-ANDRES: 3 RENE-ANDRES: 2', () => {
    const employeesAndScheduleString = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

    expect(getEmployeesMatchesAtWork(employeesAndScheduleString))
      .toBe(`ASTRID-RENE: 2
    ASTRID-ANDRES: 3
    RENE-ANDRES: 2`)
  })

  test('Should return RENE-ASTRID: 3', () => {
    const employeesAndScheduleString = `RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

    expect(getEmployeesMatchesAtWork(employeesAndScheduleString)).toBe(
      `RENE-ASTRID: 3`
    )
  })
})

describe('getEmployeesAndScheduleArrayOfStrings', () => {
  test('Should return array with strings of employees and schedule', () => {
    expect(
      getEmployeesAndScheduleArrayOfStrings(`RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`)
    ).toEqual([
      'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00',
      'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
      'ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00',
    ])
  })
})

describe('isMatchInTime', () => {
  test('Should return true', () => {
    expect(
      isMatchInTime(
        { startHour: 10, startMinute: 0, endHour: 12, endMinute: 0 },
        { startHour: 11, startMinute: 0, endHour: 13, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTime(
        { startHour: 10, startMinute: 0, endHour: 12, endMinute: 0 },
        { startHour: 7, startMinute: 0, endHour: 11, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTime(
        { startHour: 9, startMinute: 0, endHour: 10, endMinute: 0 },
        { startHour: 8, startMinute: 0, endHour: 15, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      isMatchInTime(
        { startHour: 12, startMinute: 0, endHour: 18, endMinute: 0 },
        { startHour: 14, startMinute: 0, endHour: 15, endMinute: 0 }
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    expect(
      isMatchInTime(
        { startHour: 10, startMinute: 0, endHour: 14, endMinute: 0 },
        { startHour: 15, startMinute: 0, endHour: 18, endMinute: 0 }
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      isMatchInTime(
        { startHour: 14, startMinute: 0, endHour: 16, endMinute: 0 },
        { startHour: 1, startMinute: 0, endHour: 2, endMinute: 0 }
      )
    ).toBe(false)
  })
})
