import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import axios from 'axios';
import Login from "./Login";
import Rentals from "./Rentals";
import Customer from "./Customer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movie: [],
    genre: [],
    selectedFilter:"All Genre",
    search:"",
  };
  updateSearch = (searchString) => {
    this.setState({ search: searchString });
  };
  setFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };
  toggleLike = (id) => {
    let index =this.state.movie.findIndex((el)=>{
      return el._id == id ;
    })
    let currmoviesarr=this.state.movie.map((el)=>el);
    if(currmoviesarr[index].liked)
    {
      currmoviesarr[index].liked=false;
    }
    else
    {
      currmoviesarr[index].liked=true;
    }
    this.setState({movies:currmoviesarr})
  }
  DeleteMovie = (id) =>{
     let Filteredarr=this.state.movie.filter((el)=>{
         return el._id!==id;
     })
     this.setState({movie:Filteredarr})
  }
  componentDidMount() {
    let f = async() => {
      let moviesres = await axios.get("http://localhost:4000/movies")
      let genreres=await axios.get("http://localhost:4000/genre")
      let moviesdata = await moviesres.data;
      let genresdata=await genreres.data;
      // let moviedata=data.json();

      this.setState({
        movie: moviesdata,
        genre: genresdata,
        
      })
   
    }
    f();
  }
 
  render() {
    return (
      <Router>
         <div>
      <Navbar />
      <Switch> 
      <Route exact path="/rentals">
              <Rentals />
            </Route>

            <Route path="/customer">
              <Customer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

        <Route exact path="/">
        <div className="row">
        <Filter handleFilter={this.setFilter} selectedFilter={this.state.selectedFilter} genredata={this.state.genre}/>
        <div class="col-9 mt-3 p-3">
            <Search  search={this.state.search}
                    updateSearch={this.updateSearch} Total={this.state.movie.length}/>
            <Table search={this.state.search} Deletemovie={this.DeleteMovie} toggleLike={this.toggleLike} moviedata={this.state.movie} selectedFilter={this.state.selectedFilter}/>

        </div>
      </div>
        </Route>
        </Switch>
    </div>
      </Router>
    );
   
  }
}
export default App