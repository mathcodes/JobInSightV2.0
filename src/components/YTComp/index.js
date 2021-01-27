/**
 * @author Vinit Shahdeo
 * @description a web app using youtube api
 */
// creating a component
import React, { Component } from 'react'; 
import YTSearch from 'youtube-api-search';
import SearchBar from '../search_bar';
import VideoList from '../Video_list';
import VideoDetail from '../Video_detail';

const API_KEY = 'AIzaSyBKF4Eq5hSmYvCRGDvc8CvLOSyGWyKmms4'; // REPLACE IT WITH YOUR YOUTUBE API KEY


// YTSearch({key : API_KEY, term : 'Katrina Kaif'}, function(data){
//     console.log(data);
// });

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class YTComp extends Component{

  constructor(props){

    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('Shreya Ghosal');

  }
  videoSearch(term){
    YTSearch({key : API_KEY, term : term}, (videos) => {
        console.log(videos);
        this.setState({videos});
        this.setState({videos : videos})
        this.setState({
          videos : videos,
          selectedVideo : videos[0]
        })
    });
  }
   render(){
     return(
       <div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
             
            <div className="col-4">
              <SearchBar onSearchTermChange={term => this.videoSearch( term )} />
              <VideoList
              onVideoSelect = {selectedVideo => {this.setState({selectedVideo})}}
              videos={this.state.videos}/>
             </div>
             
          </div>  
        </div>
      </div>
     );
   }
}


export default YTComp;
