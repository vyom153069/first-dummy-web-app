import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3>
                <strong>Our Location</strong>
              </h3>

              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
              >
                allowFullScreen
              </iframe>
            </div>
            <div className="col md-5">
              <h3>
                <strong>Contact us</strong>
              </h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  ></input>
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                />
                <Link className="btn btn-outline-primary text-uppercase w-100 mt-3">
                  <i className="fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
