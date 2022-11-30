
import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Components/Button/PrimaryButton'

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-pink-500'>
            <span className='sr-only'>Error</span>
            <div className='flex justify-center items-center h-full'>
              4
              <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-pink-600'></div>
              4
            </div>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, we couldn't find this page.
          </p>
          <Link to='/'>
            <PrimaryButton classes='px-8 py-3 font-semibold rounded'>
              Back to homepage
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
