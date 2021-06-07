import "../header/Userdrop.css";
import useOnClickOutside from "../../../hooks/Outside";
import user from "../../../assets/img/user/user.png";
import React, { useState, useRef } from "react";

function Userdrop(props) {
  const ref = useRef();
  const [modal, setModal] = useState(false);
  useOnClickOutside(ref, () => setModal(false));
  function openmodal(e) {
    e.preventDefault();
    modal ? setModal(false) : setModal(true);
  }
  return (
    <div>
      <div
        ref={ref}
        className={modal ? "dropdown relative is-active" : "dropdown relative"}
      >
        <div onClick={openmodal} className="dropdown-trigger clickable">
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            className="bg-white pr-2 bg-transparent border rounded-full clickable select-none"
          >
            <p className="flex space-x-1 align-center">
              <img
                className="rounded-full is-36x36"
                src={user}
                alt="Avatar utilisateur"
              />
              <svg
                className="w-4 h-4 relative logo-color"
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
          className="dropdown-menu walele user-drop"
          role="menu"
        >
          <div className="dropdown-content bg-white border">
            {/* <div v-show="$auth.loggedIn">
              <h4 className="font-semibold cursor-default size-14 logo-color px-4">
                Bienvenue,
                <span className="font-semibold size-14 logo-color">Yaya</span>
              </h4>
            </div> */}
            <div>
              <a href="/connexion" className="block w-fit m-0-auto">
                <button className="btn-008489 rounded px-20 py-1 text-white size-14">
                  Se connecter
                </button>
              </a>
              <div className="size-12 pt-2 w-fit m-0-auto dropdown-item logo-color">
                Vous n'avez pas de compte ?
                <a
                  href="/inscription"
                  className="clickable color-008489 underline-hover font-semibold ml-1"
                >
                  Créer un compte
                </a>
              </div>
            </div>
            <hr className="dropdown-divider" />
            <span className="size-135 font-semibold dropdown-item block pb-5">
              Mon compte
            </span>
            <a
              href="/user"
              className="dropdown-item flex space-x-2 items-center w-fit clickable size-125"
            >
              <svg
                className="w-5 h-5 block logo-color"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="block">Profil</span>
            </a>
            <a
              href="/favoris"
              className="dropdown-item flex space-x-2 align-center w-fit clickable size-125"
            >
              <svg
                className="w-5 h-5 logo-color"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
              </svg>
              <span>Enregistrées</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdrop;
