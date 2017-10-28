import React from 'react';
import { Link } from 'react-router-dom';

const Transactions = ( { transactions, searchFlag, reset}) => {
const total = transactions.length;

return(
	<div>

		<div className="panel panel-default"><b>Products you buy and Services you use: <span className="badge badge-info"> { total }</span>{ searchFlag ? <span className="pull-right"><button className="btn btn-primary" onClick={ reset }>Reset</button></span> : null }</b>
			<div>&nbsp;</div>
			<div style={{ maxHeight:'85vh', overflowY:'auto' }} >
				{ transactions.length > 0 && transactions.map( (trans, idx) =>
						(
							<div key = { idx } className="panel panel-default" >
								<div style={{ overflowX: "hidden", overflowY:'auto' }} className="panel-heading"><Link to={`api/stock/${trans.name}`}> {trans.name }</Link></div>

								<div className="panel-body">
								<div>{ trans.purchaseDate ? `Purchase amount: $${trans.amount}` : 'Favorite Services' }</div>
									<div>Company Name: { trans.name }</div>
								</div>
							</div>
						)
				)}
			</div>
		</div>

	</div>
	)
}

export default Transactions;
