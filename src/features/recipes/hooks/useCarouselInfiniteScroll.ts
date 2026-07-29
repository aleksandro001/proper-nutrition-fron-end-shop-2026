'use client'

import { useEffect } from 'react'

import { CarouselApi } from '@/shared/components/ui/carousel'

interface Props {
  api?: CarouselApi
  hasMore?: boolean
  isFetchingMore: boolean
  onLoadMore: () => void | Promise<void>
}

export function useCarouselInfiniteScroll({
  api,
  hasMore,
  isFetchingMore,
  onLoadMore
}: Props) {
  useEffect(() => {
    if (!api) return

    const checkAndLoadMore = () => {
      if (!hasMore || isFetchingMore) return

      const selectedIndex = api.selectedScrollSnap()
      const lastIndex = api.scrollSnapList().length - 1

      if (selectedIndex >= lastIndex) {
        void onLoadMore()
      }
    }

    api.on('select', checkAndLoadMore)
    // api.on('reInit', checkAndLoadMore)

    return () => {
      api.off('select', checkAndLoadMore)
      // api.off('reInit', checkAndLoadMore)
    }
  }, [api, hasMore, isFetchingMore, onLoadMore])
}
