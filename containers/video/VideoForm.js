import React from 'react';
import {addVideo, updateForm} from '../../actions/videoActions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class VideoForm extends React.Component {

	constructor(props) {
		super(props);

        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }
    
    _handleSubmit(event) {
        event.preventDefault();
        const {title, description, file} = this.props;
        this.props.addVideo(title, description, file);
    }

    _handleChange() {
        const {name} = event.target;
        console.log('BJR')
        switch (name) {
            case 'file':
                this.props.updateForm(name, event.target.files[0]);
                break;
            default:
                this.props.updateForm(name, event.target.value);
        }
    }

	render() {
        const {title, description, file, adding} = this.props;
        const btnClass = adding ? 'btn btn-success' : 'btn';

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
                                    onChange={this._handleChange} 
                                    value={title}
                                    name='title' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Description</label>
                                <textarea 
                                    className="form-control"
                                    onChange={this._handleChange} 
                                    name="description" 
                                    value={description}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">File</label>
                                <input 
                                    className="form-control"
                                    onChange={this._handleChange}
                                    type="file" 
                                    name="file" 
                                    />
                            </div>
                            <button className={btnClass} type="submit" disabled={adding}>
                                {adding ? 'Submitted...' : 'Submit'}
                            </button>
                        </form>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        title: state.videos.addingForm.title,
        description: state.videos.addingForm.description,
        file: state.videos.addingForm.file,
        adding: state.videos.addingVideo
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateForm,
        addVideo
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);