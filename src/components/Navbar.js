import {useNavigate, Link } from 'react-router-dom';

const Navbar = ({searchText, setSearchText }) => {
const navigate = useNavigate();

// const Navbar = ({searchText, setSearchText, inputText, setInputText }) => {
// const navigate= useNavigate()


const handleSubmit = e => {
  e.preventDefault();
  setSearchText(searchText);

  const input = document.querySelector('input');
  input.value = '';
};




  const updateSearchText = (e) => {
    navigate('/search');
    setSearchText(e.target.value);
  // Apparently this wasn't used and was changed. Also, This guy changed the const navbar and added, inputText, 
  // setInputText. Also Changed more stuff below.
  };

  // const updateInputText = e => {
  //   setInputText (e.target.value);
  // }; 

  // const searchSubmit = clicked => {
  //   clicked.preventDefault();
  //   navigate("/search");
  //   setSearchText(inputText);
  //   setInputText("");
  // };
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Movie Browser
          </Link>
          <button className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link disabled">
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input 
              className="form-control me-2"   
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
              
            />
            <button className= 
                "btn btn-outline-success" 
                type="submit"
                onSubmit={handleSubmit}
            >

              Search

            </button>
          </form>
        </div>
        </div>
      </nav>
    );
  };

export default Navbar;