import React from 'react';
import VideoItem from '../../components/video/VideoItem';
import {connect} from 'react-redux';
import MDSpinner from "react-md-spinner";

class VideoList extends React.Component {

	constructor(props){
		super(props);
	}

	_renderList() {
		const {videos, loadingVideos} = this.props;

		if (loadingVideos) {
			return (
				<li className="media">
					<div className="media-body">
						<MDSpinner size={100} singleColor="#009688"/>				
					</div>
				</li>
			)
		};

		if (!videos) return null;

		return videos.map((video) => {
			return <VideoItem key={video.id} video={video} />;
		})
	}

	render () {
		return (
			<div className="row marketing">
				<div className="col-lg-12">
					<ul className="media-list">
						{this._renderList()}
					</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		videos: state.videos.videoList,
		loadingVideos: state.videos.loadingVideos
	};
}

export default connect(mapStateToProps)(VideoList);