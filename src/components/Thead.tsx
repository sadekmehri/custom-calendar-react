import { FC } from 'react'

type TheadProps = {
  columns: Array<string>
}

const Thead: FC<TheadProps> = ({ columns }: TheadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  )
}

export default Thead
