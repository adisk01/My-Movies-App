let Search = (props) => {
    return(<>
        <p>Showing {props.Total} movies from database</p>
        <button type="button" class="btn btn-dark">New</button>
        <div class="row">
            <div class="col-4 mt-4">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">

                    </div>
                    <input type="text" class="form-control" 
                    placeholder="Search..." 
                    value={props.search}
              onChange={(e) => {
                props.updateSearch(e.currentTarget.value);
              }}
                    aria-describedby="basic-addon1">
                    </input>
                </div>
            </div>
        </div>
    </>
    );
};
export default Search;