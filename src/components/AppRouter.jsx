import { Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'

import {privateRoutes, publicRoutes} from '../routes'
import { Context } from '../index';


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

    return (
        <Routes>
            {user ? 
                privateRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />
                )
                :
                publicRoutes.map(({path, element}) => 
                <Route key={path} path={path} element={element} />
                )
            }
        </Routes>  
    )

    // return user ? (
    //     <Routes>
    //         {privateRoutes.map(({path, element}) => 
    //             <Route key={path} path={path} element={element} />
    //         )}
    //     </Routes>
    // ) : (
    //     <Routes>
    //         {publicRoutes.map(({path, element}) => 
    //             <Route key={path} path={path} element={element} />
    //         )}
    //     </Routes>
    // )
};

export default AppRouter;