import React from 'react'
import { Route,Routes} from 'react-router-dom'
import HeaderOne from '../Pages/HeaderOne'
import SignInPage from '../Pages/SignInPage'
import DisplayPage from '../Pages/DisplayPage' 
import PageOne from '../Pages/SideBarPages/PageOne'
import PageTwo from '../Pages/SideBarPages/PageTwo'
import PageThree from '../Pages/SideBarPages/PageThree'
import PageFour from '../Pages/SideBarPages/PageFour'
import PageFive from '../Pages/SideBarPages/PageFive'


function MainNavigation() {
    return (
        <div>
            
            <Routes>
                <Route exact path = "/" element={<HeaderOne />}></Route>
                <Route path="/signin" element={<SignInPage />}></Route>
                <Route path = "/display" element={<DisplayPage />}></Route>
                <Route path = "/First" element={<PageOne />}></Route>
                <Route path = "/Second" element={<PageTwo />}></Route>
                <Route path = "/Third" element={<PageThree/>}></Route>
                <Route path = "/Fourth" element={<PageFour />}></Route>
                <Route path = "/Fifth" element={<PageFive/>}></Route>

                
            </Routes>
        
            
        </div>
    )
}

export default MainNavigation
