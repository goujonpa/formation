import React from 'react';
import {detailMovement} from '../../actions/videoActions';
import {connect} from 'react-redux';


class VideoDetail extends React.Component {

	constructor(props) {
		super(props);

		this.onClickNext = this.onClickNext.bind(this);
		this.onClickPrev = this.onClickPrev.bind(this);
	}

	onClickNext() {
		detailMovement(1);
	}

	onClickPrev() {
		detailMovement(-1);
	}

	render() {
		const {videos, currentId} = this.props;
		const currentVideo = videos.filter(video => {
				return video.id == currentId
		})[0];

		console.log(videos);

		
		if (!videos || !currentVideo) return null;

		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="video-detail">
						<div className="caption">
							<video
								style={{ width: '100%', backgroundColor: 'black' }}
								height="300"
								controls
								src={
									currentVideo &&
									'./uploads/' + currentVideo.file
								}
							>
							</video>
							<button onClick={this.onClickPrev}>PREVIOUS</button>
							<button onClick={this.onClickNext}>NEXT</button>
							<h3>{currentVideo && currentVideo.title}</h3>
							<p>{currentVideo && currentVideo.description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

VideoDetail.defaultProps = {
	initId: 1
}

function mapStateToProps(state) {
	return {
		videos: state.videos,
		currentId: state.currentVideoId
	}
}

export default connect(mapStateToProps)(VideoDetail);