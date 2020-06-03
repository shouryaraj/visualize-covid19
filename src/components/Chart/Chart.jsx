import React, { useState, useEffect }  from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
import { red } from '@material-ui/core/colors';
// Charts Functions
const Charts = () => {
    const [dailydata, setDailyData] = useState ({});

    useState (() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        console.log("daily_value")
        console.log(dailydata)
        fetchAPI();
    })
    // if and else statment ':' for the else statement
    const lineChart = (
        dailydata.length

            ? (<Line 
            data= {{
                labels: dailydata.map(( {date}) => date),
                datasets: 
                [ {
                        data: dailydata.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    {
                        data: dailydata.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: red,
                        backgroundColor: 'rgba(255, 0, 0 , 0.5)',
                        fill: true,

                }
            ]

            }}
            />): null
    );

    return(
        <div className={styles.container}>
            {lineChart}

        </div>
    )
}

export default Charts