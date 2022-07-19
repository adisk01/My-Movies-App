let Pagination = (props) => {
  let arr = []
  for (let i = 1; i <= props.numberofpages; i++) {
    arr.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {arr.map((el) => {
          return (
            <li
              onClick={() => {
                props.selectPage(el);
              }}
              class={`page-item ${props.currPage === el ? "active" : ""}`}
            >
              <a class="page-link">{el}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination