"use client"
import React from 'react'
import Loading from '../loading'

const Page = () => {

const [isLoading, setIsLoading] = React.useState(true)
    return (
        <div>
        {isLoading ? <Loading/> :null  }
        </div>
  )
}

export default Page