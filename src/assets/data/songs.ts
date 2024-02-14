import { FC, SVGProps } from 'react'
import FaceSmile from 'assets/icons/face-smile.svg?react'
import FaceMeh from 'assets/icons/face-meh.svg?react'

export type Song = {
  name: string,
  artist: string,
  album: string,
  year: number,
  rating: FC<SVGProps<SVGSVGElement>>
}

export const songs: Song[] = [
  {
    name: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    year: 2011,
    rating: FaceSmile
  },
  {
    name: 'Fire for You',
    artist: 'Cannons',
    album: 'Shadows',
    year: 2019,
    rating: FaceSmile
  },
  {
    name: 'Fairly Local',
    artist: 'Twenty One Pilots',
    album: 'Blurryface',
    year: 2015,
    rating: FaceSmile
  },
  {
    name: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    year: 2020,
    rating: FaceMeh
  }
]