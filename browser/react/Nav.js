import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
	  return (
  <div>
    <nav id="mainNavbar" className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="navbar-brand"><Link to="/">Investoshop</Link></div>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">My Portfolio</a>
            </li>
            <li className="divider" />
            <li>
              <a href="#">My Budget</a>
            </li>
            <li>

            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="">
              <Link to="#">
                <span className="glyphicon glyphicon-heart" />
                { ' ' }
                    Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    );
  }
}


export default Nav;
