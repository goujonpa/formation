import React from 'react';
import {connect} from 'react-redux';
import {
	fetchVideos,
	setCurrentVideo
} from '../../actions/videoActions';
import {bindActionCreators} from 'redux';
import MDSpinner from "react-md-spinner";

class VideoDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.fetchVideos();
		this.props.setCurrentVideo(id);
	}

	_renderVideo() {
		const {videos, currentVideoId, loadingVideos} = this.props;
		const currentVideo = videos.filter(video => (
			Number(video.id) === Number(currentVideoId)
		))[0];
		if (loadingVideos) {
			return (
				<div className="caption">
					<p><MDSpinner size={100} singleColor="#009688"/></p>
				</div>
			);
		}

		if (!videos || !currentVideo) return null;

		return (
			<div className="caption">
				<video
					style={{ width: '100%', backgroundColor: 'black' }}
					height="300"
					controls
					src={
						currentVideo &&
						`/site/web/uploads/${currentVideo.file}`
					}
				>
				</video>
				<h3>{currentVideo && currentVideo.title}</h3>
				<p>{currentVideo && currentVideo.description}</p>
			</div>
		);
}

	render() {
		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="video-detail">
						{this._renderVideo()}
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchVideos,
		setCurrentVideo
	}, dispatch)
}

function mapStateToProps(state) {
	return {
		videos: state.videos.videoList,
		currentVideoId: state.videos.currentVideoId,
		loadingVideos: state.videos.loadingVideos
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);