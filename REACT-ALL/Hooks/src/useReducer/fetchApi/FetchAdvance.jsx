import React, { useReducer, useState } from 'react';

const initialState = [{ id: Date.now(), name: 'Pallab mondal', email: 'pallab@gmail.com' }];

const reduce = (state, action) => {
  switch (action.type) {
    case 'ADD': return [...state, action.payload];
    case 'DELETE': return state.filter((item) => item.id !== action.payload);
    default: return state;
  }
}


function FetchPost() {
  const [state, dispatch] = useReducer(reduce, initialState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false)

  // console.log(name,email);

  function handleSubmit(e) {
    e.preventDefault();
    let contact = { id: '', name: '', email: '' };
    if (!name || !email) {
      setError(true)
    }
    else {
      contact = {
        id: Date.now(),
        name,
        email
      }
      dispatch({ type: 'ADD', payload: contact });
      setName('');
      setEmail('');
      setError(false)
    }
    // console.log(contact);
  }

  return (
    <>
      {/* form */}
      <div className='w-50 mx-auto my-5 p-5 bg-dark text-light'>
        <h2 className='text-center text-success'>Add to card</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary text-center">Submit</button>
          </div>
        </form>

      </div>

      {/* error */}
      {
        !error ? ''
          :
          <div className='text-danger text-center'>
            <p>Enter name and e-mail</p>
          </div>
      }

      {/* showing name and e-mail */}
      {
        state.map((item) => {
          return (
            <center key={item.id}>
              <div className="card m-2 w-75 ">
                <div className="card-body row">
                  <div className="col-md-9 text-left">
                    <h5>Welcome <strong className='text-success'>{item.name}</strong></h5>
                    <h5>Your e-mail is: <strong className='text-success'>{item.email}</strong></h5>
                  </div>
                  <div className="col-md-3 my-auto">
                    <button onClick={() => { dispatch({ type: 'DELETE', payload: item.id }) }} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </center>

          );
        })
      }
    </>
  )
}

export default FetchPost;
