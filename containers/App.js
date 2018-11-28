import React, {Component} from 'react';
import {connect} from 'react-redux';
import VideoDetail from './video/VideoDetail';
import VideoList from './video/VideoList';
import VideoForm from './video/VideoForm';
import {fetchVideos} from '../actions/videoActions';
import {bindActionCreators} from 'redux';


class App extends Component {
    constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchVideos();
	}

    render() {
        const {videos} = this.props;
        return [
			<VideoDetail key="detail" />,
			<VideoForm key="form" />,
            <VideoList key="list" />
        ];
    }
}

function mapStateToProps(state) {
	return {
		videos: state.videos.VideoList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchVideos}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);