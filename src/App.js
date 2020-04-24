import React from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';
import { apiKey } from './api/apikey';

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null
  }

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', { 
      params: {
        part: 'snippet',
        maxResults: 5,
        key: apiKey,
        q: searchTerm
      }
    });

    this.setState({ 
      video: response.data.items,
      selectedVideo: response.data.items[0]
     })
  }

  render() {
    const { selectedVideo } = this.state;
    return (
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>        
        </Grid>
      </Grid>
    )
  }
}

export default App;