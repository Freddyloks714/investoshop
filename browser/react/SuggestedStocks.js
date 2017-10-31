import React, { Component } from 'react';
import PercentPurchase from './PercentPurchase';
import FixedAmount from './FixedAmount';

class SuggestedStocks extends Component {
  constructor(props){
    super(props);

    this.state = {
      allocationChoice:[],
      fixedAmount:{}
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.onFixedAmount = this.onFixedAmount.bind(this);
  }

  handleSelect(e){
    let allocationChoice = [];
    const methodChoice = e.target.value;
    const idx = e.target.id;
    allocationChoice =[...this.state.allocationChoice.slice(0, idx), methodChoice, ...this.state.allocationChoice.slice(idx+1)];

    this.setState( { allocationChoice });
  }

  onFixedAmount(e){
    const fixedAmount = e.target.value;
    this.setState( { fixedAmount })
  }

  render(){
    const { companies, allocationPercents } = this.props;
    const choice = this.state.allocationChoice;

    return(
    <div className="panel panel-default"><b>Investments based on your favorite products and services</b>
        <div>&nbsp;</div>
        <table>
          <thead>
            <tr>
              <th className="company">Company</th>
              <th className="investMethod">Investment Method</th>
              <th className="alloc">Allocation</th>
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
                  <select className="form-control" id={ index } onChange={ this.handleSelect }>
                    <option value="percent of purchases">percent of purchases</option>
                    <option>round my change</option>
                    <option>monthly fixed amount</option>
                  </select>
                </td>


                <td id={index} className="item">
                  { (!choice.length || choice[index] === 'percent of purchases') ? <PercentPurchase Percents = { allocationPercents } /> : ( choice[index] === 'monthly fixed amount' ? <FixedAmount onFixedAmount={ this.onFixedAmount }/> :  '' ) }

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
