import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import React, { useContext } from 'react';
import '../index.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../index';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);
    return (
        <AppBar position="static">
            <Toolbar variant='dense' >
                <Grid container justifyContent={"flex-end"} >
                    {user ? 
                        <Button onClick={() => auth.signOut()} style={{color: 'black'}} variant={'outlined'}>Выйти</Button>
                        : 
                        <Button style={{color: 'black'}} variant={'outlined'}>Логин</Button>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;