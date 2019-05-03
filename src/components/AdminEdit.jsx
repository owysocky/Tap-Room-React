import React from "react";
import AdminHeader from "./AdminHeader";
import BeerList from "./BeerList";
import PropTypes from "prop-types";

const AdminEdit = props => {
  console.log(props.currentRouterPath);
  return (
    <div>
      <AdminHeader />
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
};

AdminEdit.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default AdminEdit;
