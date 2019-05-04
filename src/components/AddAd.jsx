import React from "react";
import { v4 } from "uuid";
import AdminHeader from "./AdminHeader";

function AddAd(props) {
  let _event = null;
  let _location = null;
  let _description = null;
  let _dates = null;

  function handleNewAdSubmission(event) {
    event.preventDefault();
    props.onNewAdAddition({
      event: _event.value,
      location: _location.value,
      description: _description.value,
      dates: _dates.value,
      id: v4()
    });
    _event.value = "";
    _location.value = "";
    _description.value = "";
    _dates.value = "";
  }

  return (
    <div>
      <style>{`
        .add-ad{
          margin-top: 20px;
          margin-left: 40px;
        }
        input{
          padding: 20px;
          width: 50%;
          border: 1px solid #213458;
          border-radius: 10px;
          margin: 3px;
        }
        input:focus {
          outline: none !important;
          border:1px solid #213458;
          box-shadow: 0 0 10px #719ECE;
        }
        button{
          padding: 20px;
          color: white;
          background-color: #213458;
          width: 40%;
          border: 1px solid #213458;
          border-radius: 10px;
        }
        h3{
          color: #213458;
        }
      `}</style>
      <div>
        <AdminHeader />
      </div>
      <div className="add-ad">
        <h3>Got new ad to add?</h3>
        <form onSubmit={handleNewAdSubmission}>
          <input
            type="text"
            id="event"
            placeholder="Event Name"
            ref={input => {
              _event = input;
            }}
          />
          <br />
          <input
            type="text"
            id="dates"
            placeholder="Dates"
            ref={input => {
              _dates = input;
            }}
          />
          <br />
          <input
            type="text"
            id="location"
            placeholder="Location"
            ref={input => {
              _location = input;
            }}
          />
          <br />
          <input
            type="text"
            id="description"
            placeholder="Description"
            ref={input => {
              _description = input;
            }}
          />
          <br />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddAd;
