import React, {Component} from 'react';
import VideoList from './video/VideoList';
import VideoForm from './video/VideoForm';
import VideoDetail from './video/VideoDetail';
import {Switch, Route, withRouter} from 'react-router';
import {Link} from 'react-router-dom';

class App extends Component {
	render() {
        return (
			<div className="container">
				<header>
					<nav className="navbar navbar-inverse navbar-fixed-top">
						<div className="container">
							<div className="navbar-header">
								<Link to="/" className="navbar-brand">
									<i className="glyphicon glyphicon-film" style={{marginRight: '10px'}}></i>
									Reactube
								</Link>
							</div>
							<ul className="nav navbar-nav navbar-right">
								<li>
									<Link to="/">LIST</Link>
								</li>
								<li>
									<Link to="/videos/new">NEW</Link>
								</li>
							</ul>
						</div>
					</nav>
				</header>
				<Switch>
					<Route exact path="/" component={VideoList} />
					<Route exact path="/videos/new" component={VideoForm} />
					<Route exact path="/videos/:id" component={VideoDetail} />
				</Switch>
			</div>
		)
    }
}

export default withRouter(App);