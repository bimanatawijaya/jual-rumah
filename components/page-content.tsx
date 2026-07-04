"use client"

import { useEffect, useState, type ReactNode } from "react"
import { PageSkeleton } from "@/components/skeletons"

interface PageContentProps {
  children: ReactNode
}

export function PageContent({ children }: PageContentProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (document.readyState === "complete") {
      setReady(true)
    } else {
      const onLoad = () => setReady(true)
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])

  if (!ready) return <PageSkeleton />
  return <>{children}</>
}
