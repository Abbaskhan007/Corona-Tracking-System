import React from 'react'
import {Card, CardContent, Grid, Typography} from '@material-ui/core'
import Countup from 'react-countup'
import './Cards.css';

function Cards({data}) {
    
    if(!data)
        return 'Loading....';
    else{
        const  {confirmed,recovered,lastUpdate,deaths} = data
    return (
        <div className='conatiner'>    
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs = {12} md={3} className='item infected'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <Countup start={0} end={confirmed.value}> duration = {1.5} seperator = ','
                            </Countup>
                            
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs = {12} md={3} className='item recovered'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={recovered.value}> duration = {1.5} seperator = ','
                            </Countup>
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries from covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs = {12} md={3} className='item deaths'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <Countup start={0} end={deaths.value}> duration = {1.5} seperator = ','
                            </Countup>
                        </Typography>
                        <Typography color="textSecondary" >
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths caused by covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}}

export default Cards
