import React from "react";
import AdminHeader from "./AdminHeader";
import BeerList from "./BeerList";
import PropTypes from "prop-types";

const AdminEdit = props => {
  return (
    <div>
      <AdminHeader />
      <BeerList
        beerList={props.beerList}
        currentRouterPath={props.currentRouterPath}
        onClickDelete={props.onClickDelete}
      />
    </div>
  );
};

AdminEdit.propTypes = {
  beerList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onClickDelete: PropTypes.func
};

export default AdminEdit;
