import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='h-screen flex-center'>
        <SignIn/>
    </main>
  )
}

export default SignInPage