import styles from './App.module.scss'
import Table from 'components/Table/Table'
import { songs, Song } from 'assets/data/songs'

export default function App() {
  const cells = [
    {
      name: 'Song',
      render: (item: Song) => item.name
    },
    {
      name: 'Artist',
      render: (item: Song) => item.artist
    },
    {
      name: 'Album',
      render: (item: Song) => item.album
    },
    {
      name: 'Year',
      render: (item: Song) => item.year
    },
    {
      name: 'Rating',
      render: (item: Song) => (
        <item.rating fill='#FFE933' height={'25px'} />
      )
    }
  ]

  return (
    <div className={styles.app}>
      <Table data={songs} cells={cells} />
    </div>
  )
}