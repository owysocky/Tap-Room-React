import React from "react";
import AdminHeader from "./AdminHeader";
import BeerList from "./BeerList";
import PropTypes from "prop-types";

const AdminEdit = props => {
  return (
    <div>
      <AdminHeader />
      <BeerList beerList={props.beerList} />
    </div>
  );
};

AdminEdit.propTypes = {
  beerList: PropTypes.array
};

export default AdminEdit;
