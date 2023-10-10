import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'

import {privateRoutes, publicRoutes} from '../routes'
import { Context } from '../index';
import Login from './Login';
import Chat from './Chat';


const AppRouter = () => {
    
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);
    const navigate = useNavigate(); // Получаем функцию для навигации

    if (user) {
      navigate('/chat');
    } else {
      navigate('/login');
    }
  
    return (
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    );


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