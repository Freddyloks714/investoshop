import React from 'react';

const SuggestedStocks = ({ companies }) => {

  return (
    <div>
      <h4>Investments you should make:</h4>
        <table>
					<thead>
						<tr>
              <th className="size">Company</th>
              <th className="size">Shares</th>
              <th className="size">Price</th>
              <th className="size">Exchange Fees</th>
              <th className="size">Investment Method</th>
              <th className="size">Total Investment</th>
						</tr>

					</thead>

					<tbody>
						{ companies.length ?
							companies.map( (company, index) => {
							return (
								<tr key={ index } >
									<td className="item">
										{ company.name }
									</td>

									<td className="item">
									  <input type="text" className="form-control" />
									</td>

									<td className="item">
										{ company.price }
									</td>

									<td id={ index } className="item">
                    { '' }
									</td>

									<td id={ index } className="item">
                    <select className="form-contrl">
                      <option>percent</option>
                      <option>round change</option>
                      <option>fixed amount</option>
                    </select>
									</td>

                  <td id={ index } className="item">
                    { '' }
									</td>

								</tr>
							)
						})
						: null }

					</tbody>
					{ companies.length ? (
						 <tfoot>
						 	<tr>
								<td id='tdTotal' colSpan="5"><span className='pull-left'>Total</span></td>
								<td>100</td>
							</tr>
						 </tfoot>
					  )
					   	: null }

			</table>
    </div>
  )
}

export default SuggestedStocks;
