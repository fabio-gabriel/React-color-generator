import "../styles/Header.css";
import { WrapperLogin } from "./HandleLogin";

function Header({}) {
  return (
    <header className="Header">
      <div className="header-title">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="70"
          className="logo"
        />
        <h1 className="title">Color generator</h1>
      </div>
      <WrapperLogin />
    </header>
  );
}

export default Header;
