import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { MaterialIcon } from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movies.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import styles from './MovieList.module.scss'

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>
        <a>
          <Image
            src={movie.poster}
            alt={movie.title}
            draggable={false}
            width={65}
            height={97}
            priority
          />
        </a>
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genres}>
            {movie.genres.map((genre, idx) => (
              <Link href={getGenreUrl(genre.slug)} key={genre._id}>
                <a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rating}>
          <MaterialIcon name="MdStarRate" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}
