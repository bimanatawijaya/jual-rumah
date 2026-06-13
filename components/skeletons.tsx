export function GallerySkeleton() {
  return (
    <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] rounded-md bg-surface-soft animate-pulse" />
  )
}

export function InfoSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="h-7 bg-surface-soft rounded w-3/4" />
          <div className="h-4 bg-surface-soft rounded w-1/2" />
        </div>
        <div className="h-6 w-20 bg-surface-soft rounded-full shrink-0" />
      </div>
      <div className="h-9 bg-surface-soft rounded w-1/3" />
      <div className="flex gap-6 py-3 border-y border-hairline">
        <div className="h-5 bg-surface-soft rounded w-28" />
        <div className="h-5 bg-surface-soft rounded w-28" />
        <div className="h-5 bg-surface-soft rounded w-24" />
      </div>
    </div>
  )
}

export function DescriptionSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-6 bg-surface-soft rounded w-32" />
      <div className="space-y-2">
        <div className="h-4 bg-surface-soft rounded w-full" />
        <div className="h-4 bg-surface-soft rounded w-full" />
        <div className="h-4 bg-surface-soft rounded w-5/6" />
        <div className="h-4 bg-surface-soft rounded w-full" />
        <div className="h-4 bg-surface-soft rounded w-3/4" />
      </div>
    </div>
  )
}

export function FeaturesSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-6 bg-surface-soft rounded w-40" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="size-[18px] rounded-full bg-surface-soft shrink-0" />
            <div className="h-4 bg-surface-soft rounded flex-1" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function MapSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="size-5 rounded-full bg-surface-soft" />
        <div className="h-6 bg-surface-soft rounded w-24" />
      </div>
      <div className="w-full h-[300px] rounded-md bg-surface-soft" />
    </div>
  )
}

export function AgentCardSkeleton() {
  return (
    <div className="bg-surface-card rounded-md border border-hairline p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-surface-soft rounded w-32" />
      <div className="flex items-center gap-4">
        <div className="size-14 rounded-full bg-surface-soft shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-surface-soft rounded w-1/2" />
          <div className="h-3 bg-surface-soft rounded w-2/3" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-12 rounded-sm bg-surface-soft" />
        <div className="h-12 rounded-sm bg-surface-soft" />
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="flex-1 max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 space-y-8 lg:space-y-10">
      <GallerySkeleton />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1 min-w-0 space-y-8 lg:space-y-10">
          <InfoSkeleton />
          <DescriptionSkeleton />
          <FeaturesSkeleton />
          <MapSkeleton />
        </div>
        <aside className="hidden lg:block lg:w-[380px] xl:w-[400px] shrink-0">
          <div className="sticky top-8">
            <AgentCardSkeleton />
          </div>
        </aside>
      </div>
    </div>
  )
}
