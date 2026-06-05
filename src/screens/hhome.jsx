function Hhome() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid f1">
                        <a className="navbar-brand" href="/hhome">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <h1>Hhome</h1>
         

            <div className="card f2">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                </div>
            </div>
        </div>
    )
}
export default Hhome;