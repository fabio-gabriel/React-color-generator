import "../styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        width="70"
        className="logo"
      />
      <h1 className="title">Color generator</h1>
    </header>
  );
}

export default Header;
