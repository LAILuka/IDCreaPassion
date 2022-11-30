import React from "react";
import "./ContactForm.css";

export default function ContactForm() {

    return(
        <div className="">
        <h2>React Contact Form Component Example</h2>
        <form>
          <div className="">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
          </button>
        </form>
      </div>

    )
}