import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = (props) => {

  return (

    <Sparklines data={props.data} height={120} width={180} >
      <SparklinesLine color={props.color}/>
      <SparklinesReferenceLine type='avg' />
    </Sparklines>
  );
}

export default Chart;
