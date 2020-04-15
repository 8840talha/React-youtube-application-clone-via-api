import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import './App.css';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null

  }
  // this passed video is coming from Videoitem.js
componentDidMount(){
  this.inputSubmitHandler('Surah Rahman Sheikh Luhaidan');
}
  videoSelectHandler = (passedvideo)=>{
    this.setState({selectedVideo:passedvideo})
  }
  inputSubmitHandler = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD4vJqR6lSlB5OvKdlyxWudPRenE-z_70Y',
        q: searchTerm
      }
    })
    // console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }


  render() {
    // console.log(this.state.video)
    console.log(this.state.selectedVideo)
    return (
      <Grid  justify= "center"  container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormChange={this.inputSubmitHandler} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail videoDisp={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={this.state.videos}  nextVideoSelector={this.videoSelectHandler}/>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

export default App;
