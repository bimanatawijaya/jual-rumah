"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-md">
        <div className="size-16 rounded-full bg-primary-disabled flex items-center justify-center mx-auto">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-8 text-primary"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="text-[22px] font-[500] text-ink">
          Ada yang tidak beres
        </h2>
        <p className="text-body text-base">
          Terjadi kesalahan saat memuat halaman. Silakan coba lagi.
        </p>
        <button
          onClick={reset}
          className="h-12 px-6 bg-primary text-on-primary text-base font-medium rounded-sm hover:bg-primary-active transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  )
}
