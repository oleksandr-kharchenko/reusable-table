import { ReactNode } from 'react'
import { v4 as uuid } from 'uuid'
import styles from './Table.module.scss'

type TableCell<T extends object> = {
  name: string,
  render: (item: T) => ReactNode
}

type TableProps<T extends object> = {
  data: T[],
  cells: TableCell<T>[]
}

export default function Table<T extends object>({ data, cells }: TableProps<T>) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {cells.map(cell => <th key={cell.name}>{cell.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={uuid()}>
            {cells.map(cell => <td key={cell.name}>{cell.render(item)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}