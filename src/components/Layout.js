import { Link, Outlet } from "react-router-dom";
import './Layout.css';

export default function Layout() {
    return (
        <>
            <h6> Menu </h6>
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">

                    <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link to='/departments' className="nav-link">Display department</Link>
                    </li>
                    <li className="nav-item">
                            <Link to='/add' className="nav-link">Add Department</Link>
                    </li>   
                       
                    </ul>
                </div>

            </nav>

            <Outlet></Outlet>
        </>
    )
}