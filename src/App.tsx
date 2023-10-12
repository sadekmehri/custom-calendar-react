import { FC, Fragment, ReactNode } from 'react'
import { TCalendarData, calendarData } from './data'
import { MonthPositionInfo, getMonthGridPositionInfo } from './utils/dateUtils'
import { MonthMap } from './common/types'
import Thead from './components/Thead'

type CalendarDataWithPosition = ReturnType<typeof processCalendarData>
type TodayPosition = ReturnType<typeof getDatePositionInGrid>
type GridShape = Omit<MonthPositionInfo, 'activeMonthMap'> & { todayPosition: TodayPosition }

// enrich the calendar data with the position of each day in the month grid
function processCalendarData(calendarData: TCalendarData[], monthMap: MonthMap) {
  return calendarData.map((item) => {
    const { startDate, ...rest } = item
    const dayOfWeek = startDate.getDate()
    const positionInGrid = monthMap[dayOfWeek]

    return {
      ...rest,
      startDate,
      dayOfWeek,
      positionInGrid,
    }
  })
}

function getDatePositionInGrid(today: Date, monthMap: MonthMap) {
  const dayOfWeek = today.getDate()
  const positionInGrid = monthMap[dayOfWeek]

  return positionInGrid
}

// create the calendar grid with the values
function createCalendarGridWithValues(
  grid: ReactNode[][],
  data: CalendarDataWithPosition,
  todayPosition: TodayPosition,
): ReactNode[][] {
  data.forEach((item) => {
    const { positionInGrid, events, dayOfWeek } = item
    const { row, column } = positionInGrid
    const isToday = row === todayPosition.row && column === todayPosition.column

    const eventsUI = events.map(({ id, color, title }) => (
      <Fragment key={id}>
        <div style={{ backgroundColor: color }}>{title}</div>
      </Fragment>
    ))

    grid[row][column] = (
      <Fragment key={dayOfWeek}>
        <div style={{ color: isToday ? 'green' : 'black' }}>{dayOfWeek}</div>
        {eventsUI}
      </Fragment>
    )
  })

  return grid
}

// initialize the calendar grid with empty values
function initializeCalendarGrid(info: GridShape): ReactNode[][] {
  const { columns, rows, startMonthIndex, endMonthIndex } = info
  const grid: ReactNode[][] = []
  let startDay = 0

  for (let i = 0; i < rows; i++) {
    const row: ReactNode[] = []
    for (let j = 0; j < columns; j++) {
      const isFirstRowBeforeStart = i === 0 && j < startMonthIndex
      const isLastRowAfterEnd = i === rows - 1 && j > endMonthIndex
      const isToday = i === todayPosition.row && j === todayPosition.column
      const item =
        isFirstRowBeforeStart || isLastRowAfterEnd ? null : (
          <p style={{ color: isToday ? 'green' : 'black' }}>{++startDay}</p>
        )

      row.push(item)
    }
    grid.push(row)
  }

  return grid
}

// Main function to create the calendar grid
const today = new Date()
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const startTime = performance.now()
const { columns, rows, startMonthIndex, endMonthIndex, activeMonthMap } = getMonthGridPositionInfo(today)
const todayPosition = getDatePositionInGrid(today, activeMonthMap)
const processedData = processCalendarData(calendarData, activeMonthMap)
const initCalendarGrid = initializeCalendarGrid({
  rows,
  columns,
  startMonthIndex,
  endMonthIndex,
  todayPosition,
})
const filledCalendarGrid = createCalendarGridWithValues(
  initCalendarGrid,
  processedData,
  todayPosition,
)
const endTime = performance.now()
const executionTime = endTime - startTime

const App: FC = () => {
  return (
    <>
      <h2>Current Date: {today.toDateString()}</h2>
      <h3>Execution Time: {executionTime} milliseconds</h3>
      {JSON.stringify(todayPosition, null, 2)}
      <table border={1}>
        <Thead columns={days} />
        <tbody>
          {/* filled using dummy data */}
          {filledCalendarGrid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
