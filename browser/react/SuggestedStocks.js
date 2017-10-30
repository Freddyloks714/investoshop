import React, { Component } from 'react';

class SuggestedStocks extends Component {

  render(){
    const { companies, allocationPercents } = this.props;

    return(
    <div className="panel panel-default"><b>Investments based on your favorite products and services</b>
        <div>&nbsp;</div>
        <table>
          <thead>
            <tr>
              <th className="size">Company</th>
              <th className="size">Investment Method</th>
              <th className="size">Allocation</th>
            </tr>

          </thead>

          <tbody>
            { companies.length ?
              companies.map((company, index) => (
              <tr key={index} >
                <td className="item">
                  { company.name }
                </td>

                <td id={index} className="item">
                  <select className="form-control" ref={ node => this.selectVal = node}>
                    <option value="percent of purchases">percent of purchases</option>
                    <option>round my change</option>
                    <option>fixed amount</option>
                  </select>
                </td>

                <td id={index} className="item">
                  <select className="form-control" name="percent" >
                    { allocationPercents.length && allocationPercents.map((percent, idx) => (
                      <option key={idx} value={percent}>{ percent }% </option>
                  ))
                  }
                  </select>
                </td>

              </tr>
                  ))
                : null }

          </tbody>
          { companies.length ? (
            <tfoot>
              <tr>
                <td id="tdTotal" colSpan="3"><span className="pull-left"></span></td>

              </tr>
            </tfoot>
                )
                  : null }

        </table>
      </div>

    )
  }

}

export default SuggestedStocks;
