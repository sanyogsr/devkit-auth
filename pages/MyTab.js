import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="./data/data2" className="navbar-link">
          Founders
          </Link>
        </li>
        
        <li className="navbar-item">
          <Link href="./data/data1" className="navbar-link">
            Job Applicants
          </Link>
        </li>
        <li className="navbar-item">
          <Link href="./data/data3" className="navbar-link">
             HR
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: lightblue;
          color: #fff;
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
        }

        .navbar-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          font-weight: bold;
          
        }

        .navbar-item {
          margin-right: 20px;
        }

        .navbar-link {
          color: #fff;
          text-decoration: none;
        }

        .navbar-link:hover {
          text-decoration: underline;
        }`}</style>
    </nav>
  );
}

export default Navbar;
