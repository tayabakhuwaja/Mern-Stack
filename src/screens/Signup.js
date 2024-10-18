import React from 'react'

export default function Signup() {
  return (
    <>
    <div className='container'>
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="name" className="form-label">name</label>
    <input type="text" className="form-control"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

    </>
  )
}
