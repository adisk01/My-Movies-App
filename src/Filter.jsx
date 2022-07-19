let Filter = (props) =>
{
     return(
        <div class="col-3">
        <ul class="list-group m-3">
            <li onClick={()=>{
                props.handleFilter("All Genre")
            }}
            class={`list-group-item ${
                props.selectedFilter==="All Genre"?"active":""
            }`}
            >All Genre
            </li>
            {
                props.genredata.map((el)=>{
                    return <li 
                    onClick={()=>{
                        props.handleFilter(el.name)
                    }}
                    key="el:_id" class={`list-group-item ${
                        props.selectedFilter===el.name?"active":""
                    }`}>
                        {el.name}
                    </li>
                })
            }
          </ul>
      </div>
    );
        
};

export default Filter