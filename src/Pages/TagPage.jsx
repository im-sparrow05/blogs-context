import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            <div className="mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2 justify-center">
                <div>
                    <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='text-xl font-bold'>
                    Blog Tagged <span className='text-blue-600 underline'>#{tag}</span>
                </h2>
            </div>
            <div className="mb-20">
                <Blogs />
            </div>
            <Pagination />
        </div>
    )
}

export default TagPage