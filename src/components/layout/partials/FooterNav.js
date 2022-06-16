import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href='https://discord.gg/fYD4QJ9A2D'>Contact</a>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
        {/* <li>
          <Link to="#0">FAQ's</Link>
        </li> */}
        <li>
          <a href='https://discord.gg/fYD4QJ9A2D'>Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;