import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }
  
  render(){
    return (
      <div>
      <button onClick={this.bitrateHandler} className='bitrate'></button>
      <button onClick={this.resolutionHandler} className='resolution'></button>
      </div>
    )
  }
}

export default YouTubeDebugger;