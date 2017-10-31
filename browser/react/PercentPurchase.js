import React from 'react';

const PercentPurchase = ( { Percents } ) => (
  <select className="form-control" name="percent" >
  { Percents.length && Percents.map( (percent,idx) => (
    <option key={ idx } value={ percent }>{ percent }% </option>
  ))
  }
  </select>
)

export default PercentPurchase;
