import { Link } from "react-router-dom";

export const Nav = () => {

function setTitle(title) {
    document.title = title
}

  return (
    <div className="nav">
      <div className="nav_link">
        <Link onClick={() => setTitle("HoM3")} to="/">Home</Link>
      </div>
      <div className="nav_link">
        <Link onClick={() => setTitle("SeArCh")} to="/search">Search</Link>
      </div>
    </div>
  );
};
