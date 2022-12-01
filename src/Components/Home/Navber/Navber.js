import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutProcess } from "../../../redux/Authentication/actions/Action";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, isLoading, loggedInUserData } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top p-3">
        <div className="container-fluid">
          <Link to="/home">
            <h1 className="text-dark">MedicareBd</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* services section  */}
              {!isLoggedIn ? (
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our services
                  </Link>
                  <ul
                    class="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link class="dropdown-item" to="bloodBank">
                        Blood Bank
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/ambulanceService">
                        Ambulance Service
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <>
                  {!isLoading && (
                    <>
                      {loggedInUserData.data.userType == "patient" && (
                        <li class="nav-item dropdown">
                          <Link
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Our services
                          </Link>
                          <ul
                            class="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="navbarDarkDropdownMenuLink"
                          >
                            <li>
                              <Link class="dropdown-item" to="bloodBank">
                                Blood Bank
                              </Link>
                            </li>
                            <li>
                              <Link
                                class="dropdown-item"
                                to="/ambulanceService"
                              >
                                Ambulance Service
                              </Link>
                            </li>
                          </ul>
                        </li>
                      )}
                    </>
                  )}
                </>
              )}

              {/* Dashboard dropdown    */}
              {loggedInUserData?.data?.userType == "admin" && (
                <li class="nav-item ">
                  <Link class="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}

              {/* show the logged in user */}
              <li className="nav-item ms-1">
                <p className="nav-link ">
                  {!isLoading && isLoggedIn && (
                    <li className="p-1">{`Hello!! ${loggedInUserData.data.personalInfo.firstName} ${loggedInUserData.data.personalInfo.lastName}`}</li>
                    // <li className="bg-success p-1">{`Hello!!`}</li>
                  )}
                </p>
              </li>
              {!isLoggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              ) : (
                <li
                  onClick={() => dispatch(logoutProcess())}
                  className="nav-item"
                >
                  <Link className="nav-link bg-danger" to="/home">
                    Log out
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
