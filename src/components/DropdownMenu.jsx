import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
      >
        <i className="bi bi-person-circle"></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/change-password">
            Change Password
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
