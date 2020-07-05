import React from 'react'
import {Bar} from 'react-chartjs-2'
import './Charts.css'

function Charts({data : {confirmed,recovered,deaths},country}) {
    console.log(confirmed)

    let area = country ? country:'Global' 

    const barChart = (confirmed ?(<Bar data = {{
        labels : ['Infected','Recovered','Deaths'],
        datasets : [{
            label : 'people',
            backgroundColor : [
                'rgba(0,0,255,8.5)',
                'rgba(0,255 ,0,8.5)',
                'rgba(255,0,0,8.5)'
            ],
            data : [confirmed.value,recovered.value,deaths.value]
        }]
        

    }}
    options = {{
        legend : {display : false},
        title : {display : true, text : `${area}`},
    }}
    />): null);

    return (
        <div className='container'>
            
            {barChart}
            
        </div>
    )
}

export default Charts
