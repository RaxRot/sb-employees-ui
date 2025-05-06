import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        Employee Management System
                    </NavLink>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="/employees"
                                    className={({ isActive }) =>
                                        'nav-link' + (isActive ? ' active' : '')
                                    }
                                >
                                    Employees
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/departments"
                                    className={({ isActive }) =>
                                        'nav-link' + (isActive ? ' active' : '')
                                    }
                                >
                                    Departments
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
