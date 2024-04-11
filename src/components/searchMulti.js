import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/searchMovieSlice";
import { useNavigate } from "react-router-dom";

function SearchMulti() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => {
    return state.searchMulti.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    console.log(event.target.value);
    dispatch(changeSearchTerm(event.target.value));
  }
  const handleSubmit = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 //dispatch(changeSearchTerm(searchTerm));
                 event.preventDefault();
                 navigate("/searchedMulti");
  }
  return (
   <form onSubmit={handleSubmit}>
     <label>Search Multi <i className="fas fa-search"></i> </label>
     <input className="input ml-2" value={searchTerm} onChange={handleSearchTermChange}/>
     </form>    
  );
}

export default SearchMulti;