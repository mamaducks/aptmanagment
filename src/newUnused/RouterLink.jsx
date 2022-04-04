import { Link } from "react-router-dom";

export function RouterLinks() {
    return (
        <div>
        <h1>Hey welcome home!</h1>
        <div className="links">
          <Link to={`/`} className="link">Profile</Link>
          <Link to={`/home/comments`} className="link">Comments</Link>
          <Link to={`/home/contact`} className="link">Contact</Link>
        </div>
      </div>
    );
}