import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoDetail from './video/VideoDetail';
import VideoList from './video/VideoList';
import VideoForm from './video/VideoForm';
import actionTypes from '../actions/actionTypes';
import {fetchVideos} from '../actions/videoActions';


class App extends Component {
    constructor(props) {
		super(props);
	}

	componentDidMount() {
		const action = {
			type: actionTypes.LOAD_VIDEOS_SUCCESS,
			videos: [
			]
		}		
		this.props.dispatch(fetchVideos());
	}

    render() {
        const {videos} = this.props;
        return [
			<VideoDetail key="detail" videos={videos} />,
			<VideoForm key="form" onSubmitSuccess={this._fetchAllVideos} />,
            <VideoList key="list" videos={videos} />
        ];
    }
}

function mapStateToProps(state) {
	return {
		videos: state.videos
	}
}

export default connect(mapStateToProps)(App);