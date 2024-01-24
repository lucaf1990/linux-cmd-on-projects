import Link from 'next/link'
import React from 'react'

export const dynamic = "force-dynamic"


const Dynamic = () => {
  return (
    <>
    <div>Dynamic usando force Dynamic contenuto è dinamico</div>
    <p>{Math.random()}</p>
    <Link href="/">Home</Link>
</>
  )
}

export default Dynamic