import React from 'react';

export const Signup = () => {

  return (
    <div className='signup'>
      <div className="container signup">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Sign Up</h1>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" className="form-control" id="confirm-password" name="confirm-password" required />
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
