import React from 'react';

function AddBeer(){
  return (
    <div className="add-beer">
    <style>{`
      .add-beer{
        margin-top: 20px;
      }
    `}</style>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='type'
          placeholder='Beer Type'/>
          <input
            type='text'
            id='company'
            placeholder='Beer Company'/>
          <input
            type='text'
            id='alcohol'
            placeholder='Alcohol percentage'/>
            <input
              type='text'
              id='price'
              placeholder='Beer price'/>

        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default AddBeer;
