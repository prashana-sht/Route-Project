import { Outlet, Link} from "react-router-dom";

export default function Root() {
    

    return (
      <>
      
        <div className="contents">
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/Products`}>Products</Link>
              </li>
              <li>
                <Link to={`/Carts`}>Carts</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        </div>
      </>
    );
  }