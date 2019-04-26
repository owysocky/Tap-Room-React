import React from 'react';

function AddBeer(){
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
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
          <br/>
        <input
          type='text'
          id='type'
          placeholder='Beer Type'/>
          <br/>
        <input
          type='text'
          id='company'
          placeholder='Beer Company'/>
          <br/>
        <input
          type='text'
          id='alcohol'
          placeholder='Alcohol percentage'/>
          <br/>
        <input
          type='text'
          id='price'
          placeholder='Beer price'/>
          <br/>
          <br/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default AddBeer;
