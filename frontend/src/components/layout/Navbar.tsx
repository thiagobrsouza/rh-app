import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3">
      <div className="container-fluid">
        <Link href='/'>
          <a className="navbar-brand">RH - App</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="ms-5 navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href='/departments'>
                <a className="nav-link">Departments</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}