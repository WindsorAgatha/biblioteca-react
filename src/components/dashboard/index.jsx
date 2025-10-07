import { useState } from 'react'
import Sidebar from './Sidebar'



function Index() {

  const [isSideBarOpen, setSideBarOpen] = useState(true)


    return (
        <>
       
            <Sidebar setSideBarOpen={setSideBarOpen} isSideBarOpen={isSideBarOpen} />
           
        </>
    )
}

export default Index
