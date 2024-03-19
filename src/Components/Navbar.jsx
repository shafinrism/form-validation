import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-3xl font-bold">
            Logo
          </Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-base font-bold text-red-600 border-b-2 border-red-600"
                    : "text-base font-bold text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive
                    ? "text-base font-bold text-red-600 border-b-2 border-red-600"
                    : "text-base font-bold text-white"
                }
              >
                Registration
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-base font-bold text-red-600 border-b-2 border-red-600"
                    : "text-base font-bold text-white"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
