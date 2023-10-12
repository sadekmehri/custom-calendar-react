import { startOfMonth, getDay, endOfMonth, getDaysInMonth } from 'date-fns'
import { MonthMap } from '../common/types'

export type MonthPositionInfo = ReturnType<typeof getMonthGridPositionInfo>

// 0 = Monday, 1 = Tuesday, etc.
function getStartAndEndIndicesForWeek(date: Date) {
  const startDate = startOfMonth(date)
  const startMonthIndex = (getDay(startDate) + 6) % 7
  const endDate = endOfMonth(date)
  const endMonthIndex = (getDay(endDate) + 6) % 7

  return {
    startMonthIndex,
    endMonthIndex,
  }
}

// get the number of rows for the month grid
function getMonthGridDimention(date: Date) {
  const { startMonthIndex, endMonthIndex } = getStartAndEndIndicesForWeek(date)

  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDayOfMonth = new Date(year, month, 1)
  const numDaysInMonth = getDaysInMonth(date)
  const firstDayOfWeek = getDay(firstDayOfMonth)

  const totalDays = numDaysInMonth + firstDayOfWeek
  let rows = Math.ceil(totalDays / 7)

  const shouldAddExtraRowAtStart = startMonthIndex === 6
  const shouldAddExtraRowAtEnd = endMonthIndex === 6
  if (shouldAddExtraRowAtStart) rows++
  if (shouldAddExtraRowAtEnd) rows--

  return { rows, columns: 7 }
}

// get the position of each day in the month grid
function getMonthGridPositionInfo(date: Date) {
  const { startMonthIndex, endMonthIndex } = getStartAndEndIndicesForWeek(date)
  const { rows, columns } = getMonthGridDimention(date)
  const activeMonthMap: MonthMap = {}
  let startDay = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const isFirstRowBeforeStart = i === 0 && j < startMonthIndex
      const isLastRowAfterEnd = i === rows - 1 && j > endMonthIndex
      if (!isFirstRowBeforeStart && !isLastRowAfterEnd) {
        activeMonthMap[++startDay] = { row: i, column: j }
      }
    }
  }

  return {
    activeMonthMap,
    rows,
    columns,
    startMonthIndex,
    endMonthIndex,
  }
}

export { getMonthGridPositionInfo }
