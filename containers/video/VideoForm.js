import React from 'react';
import VideosApi from '../../api/VideosApi';

class VideoForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            title: '',
            description: '',
            file: ''
        }
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleTitleChange = this._handleTitleChange.bind(this);
        this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
        this._handleFileChange = this._handleFileChange.bind(this);
    }
    
    _handleSubmit(event) {
        event.preventDefault();
        const {title, description, file} = this.state;
        VideosApi.createVideo(title, description, file)
            .then(response => {
                this.props.onSubmitSuccess();
                this.setState({
                    title: '',
                    description: '',
                    file: ''        
                });
            });
    }

    _handleFileChange(event) {
        this.setState({file: event.target.files[0]});
    }

    _handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    _handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

	render() {
		const {title, description, file} = this.state;

		return (
			<div className="row marketing">
				<div className="col-sm-12 col-md-12">
					<div className="video-detail">
                        <form onSubmit={this._handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={this._handleTitleChange} 
                                    value={title}
                                    name='title' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Description</label>
                                <textarea 
                                    className="form-control"
                                    onChange={this._handleDescriptionChange} 
                                    name="description" 
                                    value={description}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">File</label>
                                <input 
                                    className="form-control"
                                    onChange={this._handleFileChange}
                                    type="file" 
                                    name="file" 
                                    />
                            </div>
                            <button type="submit">SUBMIT</button>
                        </form>
					</div>
				</div>
			</div>
		);
	}
}

VideoForm.defaultProps = {
	initId: 1
}

export default VideoForm;