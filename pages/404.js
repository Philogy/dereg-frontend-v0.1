import React from 'react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Error 404, but don't worry</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  )
}

export default NotFoundPage
