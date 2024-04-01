import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div>
            <Header />
            
            <div className="mt-[100px] mb-6 mx-auto flex items-center space-x-4 justify-center">
                <div>
                    <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='text-xl font-bold'>
                    Blogs On <span className='text-blue-600 underline'>{category}</span>
                </h2>
                </div>

                <div className="mb-20">
                <Blogs />
                </div>
                <Pagination />
        </div>
    )
}

export default CategoryPage