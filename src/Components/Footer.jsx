import React from 'react'

const Footer = () => {
  return (
    <div className="bg-headerColor rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">This is a fan page
            </span>
            <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <p className="me-4 md:me-6">Thank you for you visit</p>
            </div>
        </div>
    </div>
  )
}

export default Footer