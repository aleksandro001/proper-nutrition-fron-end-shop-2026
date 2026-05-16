import { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'

interface ISkeletonLoader {
  count: number
  style?: CSSProperties
  className?: string
}

export function SkeletonLoader({ count, style, className }: ISkeletonLoader) {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={twMerge(
            'my-4 h-10 w-full animate-pulse rounded-2xl bg-gray-400',
            className
          )}
          style={style}
        />
      ))}
    </>
  )
}
