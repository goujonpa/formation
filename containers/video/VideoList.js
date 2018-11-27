import React from 'react';
import VideoItem from '../../components/video/VideoItem';

export default class VideoList extends React.Component {

	constructor(props){
		super(props);
	}

	render () {
		const {videos} = this.props;

		if (!videos) return null;

		return (
			<div className="row marketing">
				<div className="col-lg-12">
					<ul className="media-list">
						{ videos.map((video) => {
							return <VideoItem key={video.id} video={video} />;
						})}
					</ul>
				</div>
			</div>
		);
	}
}