import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { useCollectionData } from "react-firebase-hooks/firestore"
import Loading from './Loading';

const Chat = () => {

    const {auth, firestore, firebase} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const [placeholder, setPlace] = useState('')


    const sendMassage = async () => {
        if(value) {
            firestore.collection('messages').add({
                'uid': user.uid,
                'displayName': user.displayName,
                'photoURL': user.photoURL,
                'text': value,
                'createdAt': firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue('')
            setPlace('')
        } else {
            setPlace('Напиши что-то')
        }
    }
    

    if(loading) {
        return <Loading/>
    }

    return (
        <Container>
            <Grid
                container style={{height: window.innerHeight - 50, marginTop: 15}}
                alignItems={'center'} justifyContent={'center'}
            >
                <div style={{
                        width: '80%', height: '70vh', border:  '1px solid gray', overflow: 'auto'
                    }} 
                >
                    {messages.map((message,i) => 
                        <div key={i}
                            style={{
                                margin: 10,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content'
                            }}
                        >
                            <Grid container >
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>    
                    )}
                </div>

                <Grid container direction={'column'} 
                    alignItems={'center'} style={{width: '80%'}}
                >
                    <TextField variant={'outlined'}  placeholder={placeholder}
                        fullWidth maxRows={2}  style={{margin: '10px 0'}}
                        value={value} onChange={(e) => setValue(e.target.value)}
                    />
                    <Button onClick={sendMassage} variant='outlined' style={{margin: '10px 0'}} >Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;