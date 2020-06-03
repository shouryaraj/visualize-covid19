import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from "classnames";
// Cards Functions
const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed)
    if(!confirmed){
        return 'loading.....'
    }
    
        return(
        <div className= {styles.containers}>
            <Grid container spacing={3} justify='center'>
                <Grid item component ={Card} xs={12}  md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterbuttom>Infected</Typography>
                        <Typography variant ="h5">
                            <CountUp
                                start = {0}
                                end={confirmed.value}
                                duration={2.5}
                                separator =","
                                >
                            </CountUp>
                            </Typography>
                        <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant ="body2">Number of active cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12}  md={3} className={cx( styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterbuttom>Recovered</Typography>
                        <Typography variant ="h5">
                            <CountUp
                                start = {0}
                                end={recovered.value}
                                duration={1.8}
                                separator =","
                                >
                            </CountUp>
                            </Typography>
                            <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant ="body2">Number of Recovered from Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12}  md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterbuttom>Deaths</Typography>
                        <Typography variant ="h5">
                            <CountUp
                                start = {0}
                                end={deaths.value}
                                duration={1}
                                separator =","
                                >
                            </CountUp>
                            </Typography>
                            <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant ="body2">Number of deaths caused by Covid-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
        )
    
}

export default Cards