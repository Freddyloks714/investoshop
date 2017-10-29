import React from 'react';
import { Link } from 'react-router-dom';


const InvestorAllocation = ({ allocationPercents, selectAllocationPercent }) =>
// console.log('..............in Main.js', data.data);

  (
    <div>
      <div className="panel-footer" >
        <label>
          <b>Allocation to my favorite company stock</b>
        </label>
        <div>&nbsp;</div>
        <fieldset>
          <div>
            <div className="col-xs-3">
              <select className="form-control" name="percent" onChange={ev => selectAllocationPercent(ev)}>

                { allocationPercents.length && allocationPercents.map((percent, idx) => (
                  <option key={idx} value={percent}>{ percent }% </option>
							))
							}
              </select>

            </div>
          </div>
          <div className="col-xs-7">
								of my purchases from the company
          </div>
          <div className="form-group">
            <div className="col-xs-2">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );


export default InvestorAllocation;
