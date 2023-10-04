import { Grid, Container } from '@mui/material';
import React from 'react';
import '../index.css'

const Loading = () => {
    return (
        <Container>
            <Grid
                container style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid  
                    container alignItems={'center'}
                    direction={'column'}
                >
                   <span className="loader"></span>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loading;