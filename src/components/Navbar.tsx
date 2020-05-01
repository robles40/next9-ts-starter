import Link from 'next/link';
export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>
            <span className="title">Next.js</span>
          </a>
        </Link>
        <ul role="navigation" aria-label="List of pages">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav {
            width: 100%;
            padding: 0 1.2em 0 1.2em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .title {
            text-transform: uppercase;
            font-weight: bold;
          }
          .title:hover {
            text-decoration: underline;
          }
          nav a {
            color: #111;
            text-decoration: none;
          }
          nav a:hover {
            font-weight: bold;
          }
          nav ul > * {
            display: inline-block;
            font-size: 0.8em;
          }
        `}
      </style>
    </>
  );
}
