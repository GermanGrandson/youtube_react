import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC2shxp3V7yBXg7lPYvtbjUFFeUPP94_mA';

// TODO Create a new component. This Comp should produce some HTML
// const App = function(){
//   return <div>Hi!</div>;
// }

// TODO This is ES6 syntax
// const App = () => {
//   return <div>
//       <SearchBar />
//     </div>;
// }

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('travel')
  }

    // (data) =>, can also be translated to function(data){}
    // When a kv pair are the same it can just be one word. For example for below = this.setState({videos})

  videoSearch(term){
    YTSearch({key: API_KEY, term: term},(videos)=> {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
