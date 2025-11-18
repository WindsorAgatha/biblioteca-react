import { useState } from 'react'
import Sidebar from './Sidebar'
import LiteraryGenre from './LiteraryGenre'



function Index() {

    const [isSideBarOpen, setSideBarOpen] = useState(true)


    return (
        <>
            <div className='flex w-full h-full'>
                <Sidebar setSideBarOpen={setSideBarOpen} isSideBarOpen={isSideBarOpen} />
            </div>

        </>
    )
}

export default Index
