import React from 'react';
import './bookTable.css'

function BookTable() {
    return (
        <div className="container mt-5 g-0">
          <form className="booking-form g-0">
            <div className="row mb-3">
              <div className="col-md-4">
                <input type="text" className="form-control" name="name" placeholder="Name" required />
              </div>
              <div className="col-md-4">
                <input type="email" className="form-control" name="email" placeholder="Email" required />
              </div>
              <div className="col-md-4">
                <input type="tel" className="form-control" name="phone" placeholder="Phone No" required />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <input type="date" className="form-control" name="date" required />
              </div>
              <div className="col-md-4">
                <input type="time" className="form-control" name="time" required />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" name="message" placeholder="Message" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <textarea className="form-control" name="additionalInfo" placeholder="Additional Information"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <button className="bookTableBtn">Book Table</button>
              </div>
            </div>
          </form>
        </div>
      );
}

export default BookTable;


