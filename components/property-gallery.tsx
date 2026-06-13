"use client"

import { useState, useCallback, useEffect, useMemo } from "react"
import Image from "next/image"
import type { PropertyImage } from "@/data/property"
import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon, CloseIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

interface PropertyGalleryProps {
  images: PropertyImage[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const openGallery = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsFullscreen(true)
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isFullscreen) return
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "Escape") setIsFullscreen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isFullscreen, goNext, goPrev])

  const bentoImages = useMemo(() => images.slice(0, 5), [images])
  const extraCount = images.length - 5

  return (
    <>
      {/* Mobile: carousel */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-md bg-surface-soft lg:hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`Gambar ${index + 1} dari ${images.length}: ${image.caption}`}
          >
            <Image
              src={image.url}
              alt={image.caption}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-canvas/80 hover:bg-canvas flex items-center justify-center text-ink shadow-sm transition-colors"
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeftIcon className="size-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-canvas/80 hover:bg-canvas flex items-center justify-center text-ink shadow-sm transition-colors"
              aria-label="Gambar berikutnya"
            >
              <ChevronRightIcon className="size-5" />
            </button>
          </>
        )}

        <button
          onClick={() => openGallery(currentIndex)}
          className="absolute top-3 right-3 size-10 rounded-full bg-canvas/80 hover:bg-canvas flex items-center justify-center text-ink shadow-sm transition-colors"
          aria-label="Tampilkan fullscreen"
        >
          <ExpandIcon className="size-5" />
        </button>

        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5"
          role="tablist"
          aria-label="Navigasi gambar"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={cn(
                "size-2 rounded-full transition-all",
                index === currentIndex
                  ? "bg-canvas w-5"
                  : "bg-canvas/60 hover:bg-canvas/80"
              )}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Lompat ke gambar ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: bento grid ala Airbnb */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-2 rounded-md overflow-hidden aspect-[2/1]">
        <button
          onClick={() => openGallery(0)}
          className="col-span-2 row-span-2 relative overflow-hidden bg-surface-soft group rounded-[2px]"
          aria-label={`Buka galeri: ${images[0]?.caption}`}
        >
          <Image
            src={images[0].url}
            alt={images[0].caption}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="50vw"
            priority
          />
        </button>

        {bentoImages.slice(1).map((image, i) => {
          const actualIndex = i + 1
          const isLast = actualIndex === 4 && extraCount > 0

          return (
            <button
              key={actualIndex}
              onClick={() => openGallery(actualIndex)}
              className="relative overflow-hidden bg-surface-soft group rounded-[2px]"
              aria-label={`Buka galeri: ${image.caption}`}
            >
              <Image
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="25vw"
              />
              {isLast && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/50">
                  <span className="text-white text-sm font-semibold">
                    Lihat {extraCount + 1} foto lainnya
                  </span>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Fullscreen gallery */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri fullscreen"
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Tutup fullscreen"
          >
            <CloseIcon className="size-6" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video mx-4">
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeftIcon className="size-6" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Gambar berikutnya"
              >
                <ChevronRightIcon className="size-6" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
