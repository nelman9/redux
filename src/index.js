// create first components
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import Count from './components/counter';
const API_KEY= 'AIzaSyBMnsVxkRhPwLf4OSanxoH6N7mBQEC6akg';


class Test extends Component {
 constructor(props){
   super(props);

   this.state ={videos: []}
   YTSearch({key:API_KEY, term:'surfboards'}, videos => {
     console.log({videos});
   });

 }

render(){
  return(
    <div>
    <SearchBar />
    <VideoList videos={this.state.videos}/>
    //<Count/>
    </div>
);
}
}

ReactDOM.render(<Test />,document.querySelector('.container'))
