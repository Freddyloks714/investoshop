import React from 'react';
import { Link } from 'react-router-dom';

const Transactions = ( { transactions, searchFlag, reset }) => {
const total = transactions.length;

return(
	<div className="panel-footer"><b>Transactions: <span className="badge badge-info"> { total }</span>{ searchFlag ? <span className="pull-right"><button className="btn btn-primary" onClick={ reset }>Reset</button></span> : null }</b>
	<div>&nbsp;</div>
	<div style={{ maxHeight:'80vh', overflowY:'auto' }} >
		{ transactions.length > 0 && transactions.map( (trans, idx) =>
				(
					<div key = { idx } className="panel panel-default" >
						<div style={{ overflowX: "hidden", overflowY:'auto' }} className="panel-heading"><Link to={`api/stock/${trans.companyName}`}> {trans.companyName }</Link></div>

						<div className="panel-body">
							<div>Amount: ${ trans.amount } </div>
							<div>Company Name: { trans.companyName }</div>
						</div>
					</div>
				)
		)}
	</div>
	</div>
	)
}

export default Transactions;
