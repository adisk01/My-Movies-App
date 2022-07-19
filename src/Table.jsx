import React from "react";
import Pagination from "./Pagination";
import "./Table.css"
class Table extends React.Component{
    //console.log(props)
    state = {
        currPage: 1,
      };
      selectPage = (value) => {
        this.setState({ currPage: value });
      };
    render()
    {
        let allmovies=this.props.moviedata
        let currfilter=this.props.selectedFilter
        let filteredmovies=allmovies.filter((el)=>{
            if(currfilter=="All Genre")
            {
                return true;
            }else if(el.genre.name==currfilter)
            {
                return true;
            }
        });
        filteredmovies = filteredmovies.filter((el) => {
          let movieTitle = el.title;
          movieTitle = movieTitle.toLowerCase();
          let s = this.props.search.toLowerCase();
          return movieTitle.includes(s);
        });
        let numberofpages=Math.ceil(filteredmovies.length/4)
        let startIndex = (this.state.currPage - 1) * 4;
        let endIndex = Math.min(filteredmovies.length, this.state.currPage * 4);
        let moviestoshowintable=filteredmovies.slice(startIndex, endIndex);
        return (
            <>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {   moviestoshowintable.map((el)=>{
                            return( <tr key={el._id}>
                            <td>{el.title}</td>
                            <td>{el.genre.name}</td>
                            <td>{el.numberInStock}</td>
                            <td>{el.dailyRentalRate}</td>
                            <td onClick={() => {
                              this.props.toggleLike(el._id);
                            }}
                            >
                            {el.liked ? (
                              <span class="material-icons-outlined">favorite</span>
                            ) : (
                              <span class="material-icons-outlined">
                                favorite_border
                              </span>
                            )}
                          </td>
                            <td>
                                <button onClick={()=>{
                                    this.props.Deletemovie(el._id)
                                }}className="table-delete-btn">
                                  <i class="fa-solid fa-trash-can"></i>
                                   </button></td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Pagination selectPage={this.selectPage}
          currPage={this.state.currPage} numberofpages={numberofpages}/></>
        );
    }
    
};
export default Table