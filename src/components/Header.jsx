const Title = () => (
  <a href="/" className="logo">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
      alt="logo"
    />
  </a>
);
const NavItems = () => (
  <ul className="nav-items">
    <li>
      <a href="" className="nav-link">
        Home
      </a>
    </li>
    <li>
      <a href="" className="nav-link">
        Contact
      </a>
    </li>
    <li>
      <a href="" className="nav-link">
        Sign In
      </a>
    </li>
    <li>
      <a href="" className="nav-link">
        Cart
      </a>
    </li>
  </ul>
);

const Navbar = () => (
  <nav className="navbar">
    <Title />
    <NavItems />
  </nav>
);

const Header = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  );
};

export default Header;
