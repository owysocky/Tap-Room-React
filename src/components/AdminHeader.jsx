import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  let linkDecoration = {
    textDecoration: "none",
    color: "#213458"
  };
  return (
    <div className="admin-header">
      <style>{`
      .admin-header p{
        display: inline-block;
        padding-right: 30px;
        padding-left: 30px;
      }
      .admin-header{
        border: 1px solid #213458;
        text-align: center;
      }
    `}</style>
      <p>
        <Link to="/admin" style={linkDecoration}>
          Add Beer
        </Link>
      </p>
      <p>
        <Link to="/admin/edit" style={linkDecoration}>
          Edit
        </Link>
      </p>
      <p>
        <Link to="/admin/ad" style={linkDecoration}>
          Add Ad
        </Link>
      </p>
    </div>
  );
}

export default AdminHeader;
