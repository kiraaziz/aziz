import React from 'react'

export default function loading() {
  return (
    <div className='h-[61svh] relative w-full flex items-center justify-center'>
      <div className='loader absolute! blur-xl opacity-70' />
      <div className='loader absolute!' />
    </div>
  )
}
