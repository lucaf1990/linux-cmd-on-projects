import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-red-600'>{children}</div>
  )
}

export default layout