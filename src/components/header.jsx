import React, { useState } from 'react'
import { HiEllipsisVertical, HiMiniBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { GifState } from '../context/gif-context'

const Header = () => {

    const [categories, setCategories] = useState([])
    const [showCategories, setShowCategories] = useState(false)

    const { gif, filter, setFilter, favorites } = GifState();

    return (
        <nav>
            <div className='relative flex gap-4 justify-between items-center mb-2'>
                <Link to="/" className='flex gap-2 items-center'>
                    <img src="/public/logo.svg" alt="logo" className='w-10' />
                    <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIFHUB</h1>
                </Link>

                <div className='font-bold text-md flex gap-2 items-center'>

                    <Link className='px-4 py-1  transition ease-in-out hover:gradient border-b-4 hidden lg:block rounded-sm'>Reactions</Link>

                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiEllipsisVertical
                            size={35}
                            className={`py-0.5 transition ease-in-out rounded-sm hover:gradient ${showCategories ? "gradient" : ""} border-b-4 cursor-pointer hidden lg:block`} />
                    </button>

                    <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded'>
                        <Link to="/favorites">Favorite GIFs</Link>
                    </div>

                    <button>
                        <HiMiniBars3BottomRight size={30} className='text-sky-400 block lg:hidden' />
                    </button>
                </div>

                {showCategories && (
                    <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full rounded-md gradient z-20'>
                        <span className="text-3xl font-extrabold">Categories</span>
                        <hr />
                        <div>
                            <Link className='font-bold'>Reactions</Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Search */}
        </nav>
    )
}

export default Header
