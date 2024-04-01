import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className="mb-16 py-4 mt-16">
            <Blogs />
        </div>
        <Pagination/>
    </div>
  )
}

export default Home