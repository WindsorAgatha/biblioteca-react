import { useState } from 'react'
import Sidebar from './Sidebar'
import LiteraryGenre from './LiteraryGenre'



function Index() {

    const [isSideBarOpen, setSideBarOpen] = useState(true)


    return (
        <>
            <div className='flex w-full h-full bg-black'>
                <Sidebar setSideBarOpen={setSideBarOpen} isSideBarOpen={isSideBarOpen} />
                <LiteraryGenre />
            </div>

        </>
    )
}

export default Index
