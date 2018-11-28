import React, {Component} from 'react';
import VideoList from './video/VideoList';
import VideoForm from './video/VideoForm';
import VideoDetail from './video/VideoDetail';
import {Switch, Route, withRouter} from 'react-router';
import Header from '../components/common/Header';

class App extends Component {
	render() {
        return (
			<div className="container">
				<Header />
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