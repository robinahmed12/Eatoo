"use client"

import { SessionProvider } from "next-auth/react"

export default function NextSessionProvide({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}