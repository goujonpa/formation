import request from "superagent";
import config from 'config';

export default class VideosApi {
    static getAllVideos() {
        return request.get(`${config.apiPath}/videos`);
    }

    static createVideo(title, description, file) {
        return (request
            .post(`${config.apiPath}/videos`)
            .field('title', title)
            .field('description', description)
            .attach('file', file)
        );
    }
}