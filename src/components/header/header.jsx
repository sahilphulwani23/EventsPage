import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a> Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  <a> Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  <a> About us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Lets grab the tickets to the greatest events nearby !</p>
      </div>
    </header>
  );
};
