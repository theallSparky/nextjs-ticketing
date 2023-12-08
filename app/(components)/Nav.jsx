const { faTicket, faHome } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { default: Link } = require("next/link");

const Nav = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text"></p>
      </div>
    </nav>
  );
};

export default Nav;
