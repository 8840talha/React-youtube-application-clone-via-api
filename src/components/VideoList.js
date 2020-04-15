import React from 'react';

import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoList = (props) => {

    const listofvideos = props.videos.map((video, id) => {

        return <VideoItem key={id} video={video}  videoSelector={props.nextVideoSelector}/>

    });

    return (
        <Grid container spacing={10}>
            {listofvideos}
        </Grid>

    )
}

export default VideoList;