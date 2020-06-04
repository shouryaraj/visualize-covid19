import React, { useState, useEffect }  from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
import { red } from '@material-ui/core/colors';
// Charts Functions with the destructing parameter data and country
const Charts = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailydata, setDailyData] = useState ({});
    // hooks usage with the second parameter empty array to make it behave like componentdidmount to execute once
    useState (() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
      
        fetchAPI();
    }, [])
  
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

    const barChart = (
        recovered
        ?(<Bar
             data = {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    labels: 'people',
                    backgroundColor: [
                        'rgba(0, 0 , 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0 , 0, 0.5)',

                    ],
                    data: [confirmed.value, recovered.value, deaths.value]


                    
                }]

             }}

             options = {{
                 legend: {display: false},
                 title: {display: true, text: `Current state in ${country}`, }
             }}
            />
        ): null
    )

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}

        </div>
    )
}

export default Charts