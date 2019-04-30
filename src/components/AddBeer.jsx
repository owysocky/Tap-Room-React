import React from 'react';
import PropTypes from 'prop-types';

function AddBeer(props) {
  let _name = null;
  let _type = null;
  let _company = null;
  let _alcohol = null;
  let _price = null;

  function handleNewBeerSubmission(event) {
    event.preventDefault()
    props.onNewBeerAddition({ name: _name.value, type: _type.value, company: _company.value, alcohol: _alcohol.value, price: _price.value })
    _name.value = "";
    _type.value = "";
    _company.value = "";
    _alcohol.value = "";
    _price.value = "";
  }

  return (
    <div className="add-beer">
      <style>{`
        .add-beer{
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
      <h3>Got new beer on tap?</h3>
      <form onSubmit={handleNewBeerSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => { _name = input; }} />
        <br />
        <input
          type='text'
          id='type'
          placeholder='Beer Type'
          ref={(input) => { _type = input; }} />
        <br />
        <input
          type='text'
          id='company'
          placeholder='Beer Company'
          ref={(input) => { _company = input; }} />
        <br />
        <input
          type='text'
          id='alcohol'
          placeholder='Alcohol percentage'
          ref={(input) => { _alcohol = input; }} />
        <br />
        <input
          type='text'
          id='price'
          placeholder='Beer price'
          ref={(input) => { _price = input; }} />
        <br />
        <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

AddBeer.propTypes = {
  onNewBeerAddition: PropTypes.func
};

export default AddBeer;
