import "../header/Proposition.css";
import React, { useState } from "react";
// import Logo from "../../logo/Logo";
function Proposition(props) {
  const [modal, setModal] = useState(false);
  function openmodal(e) {
    e.preventDefault();
    setModal(true);
  }
  function closemodal(e) {
    e.preventDefault();
    setModal(false);
  }
  const content =
    props.title === "Louer" ? (
      <div className="dropdown-content bg-white border">
        <a href="/" className="dropdown-item size-13 clickable">
          Location totale
        </a>
        <a href="/" className="dropdown-item size-13 clickable">
          Louer une part
        </a>
      </div>
    ) : (
      <div className="dropdown-content bg-white border">
        <a href="/" className="dropdown-item size-13 clickable">
          Achat total
        </a>
        <a href="/" className="dropdown-item size-13 clickable">
          Acheter une part
        </a>
      </div>
    );
  return (
    <div>
      <div>
        <div
          onMouseOver={openmodal}
          onMouseLeave={closemodal}
          className={modal ? "dropdown is-active" : "dropdown"}
        >
          <div className="dropdown-trigger bg-transparent">
            <div
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              className="flex align-center space-x-1 bg-transparent border-none rounded-full clickable select-none"
            >
              <p className="flex space-x-1.5 items-center h-fit">
                <span className="size-14 text-white font-semibold">
                  {props.title}
                </span>
                <svg
                  className="w-4 h-4 text-white relative top-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
          </div>
          <div
            id="dropdown-menu"
            className="dropdown-menu proposition"
            role="menu"
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposition;
