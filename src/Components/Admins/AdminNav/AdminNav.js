import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaAmbulance } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const AdminNav = ({ pathUrl }) => {
  return (
    <div className="text-center" style={{ height: "300vh" }}>
      <h1 className="mb-3 text-white">
        Admin Portal <hr />{" "}
      </h1>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mb-2">
          <Link className="nav-link" to={`${pathUrl}/addAdmin`}>
            <RiAdminFill className="link" />
            <p className="item">Add Admin</p>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to={`${pathUrl}/addAmbulance`}>
            <FaAmbulance className="link" />
            <p className="item">Ambulance Service</p>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to={`${pathUrl}/addBlood`}>
            <BiDonateBlood className="link" />
            <p className="item">Blood Bank</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNav;
