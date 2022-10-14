import getEmployeesMatchesAtWork from './get-employees-matches-at-work'

describe('getEmployeesMatchesAtWork', () => {
  test('Should return ASTRID-RENE: 2 ASTRID-ANDRES: 3 RENE-ANDRES: 2', () => {
    const employeesAndSchedule = `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
    ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

    expect(getEmployeesMatchesAtWork(employeesAndSchedule)).toBe(`ASTRID-RENE: 2
    ASTRID-ANDRES: 3
    RENE-ANDRES: 2`)
  })

  test('Should return RENE-ASTRID: 3', () => {
    const employeesAndSchedule = `RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
    ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`

    expect(getEmployeesMatchesAtWork(employeesAndSchedule)).toBe(`RENE-ASTRID: 3`)
  })
})
