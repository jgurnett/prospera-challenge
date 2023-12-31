'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Perform automatic redirection when the component loads
    router.push('/auth/login')
  }, [])

  return <div></div>
}
