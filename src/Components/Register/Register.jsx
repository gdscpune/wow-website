import React from "react";

export default function Register() {
  return (
    <div
      id="register"
      className="pt-14 flex flex-col items-center justify-center relative "
    >
      <h2 className="text-5xl mb-5 text-center">Book Your Ticket Now</h2>
      <iframe
        id="ts-iframe"
        src="https://www.townscript.com/v2/widget/devfest-patna-2022-302030/booking"
        frameBorder="0"
        height="600"
        width="80%"
      ></iframe>
      <link
        rel="stylesheet"
        href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css"
      ></link>
    </div>
  );
}
