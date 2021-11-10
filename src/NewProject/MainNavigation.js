import React from 'react'
import { Route,Routes} from 'react-router-dom'
import HeaderOne from './HeaderOne'
import SignInPage from './SignInPage'


function MainNavigation() {
    return (
        <div>
            
            <Routes>
                <Route exact path = "/" element={<HeaderOne />}></Route>
                <Route path="/signin" element={<SignInPage />}></Route>
                
            </Routes>
        
            
        </div>
    )
}

export default MainNavigation
