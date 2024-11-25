const Header = () => {
    const navMenuOpts = [
        {
            "id": 0,
            "text": "About Me"
        },
        {
            "id": 1,
            "text": "My Projects"
        },
        {
            "id": 2,
            "text": "Contact Info"
        },
        {
            "id": 3,
            "text": "My Company"
        }
    ]
    const handleBurgerClick = () => {
        
        console.log("clicked");
    }
    return (
        <header>
            <section className="logo-name header_el">
                <img
                    src="./assets/Deadly Mickey.png"
                    alt="logo"
                    title="hehe"
                    height="73px"
                    width="63px"
                />
                <h2>evanmico.dev</h2>
            </section>
            <div className="header_el">
                <h1>Portfolio Site</h1>
            </div>
            <nav className="header_el" aria-label="primary-site-navigation">
                <ul className="linkList linkList_siteNav">
                    {
                        navMenuOpts.map((opt) => (
                            <li key={opt.id} className="siteNavOpt">
                                <a href="">{opt.text}</a>
                            </li>
                        ))
                    }
                </ul>
                <button onClick={handleBurgerClick} className="burger">
                    <span className="burgerMenu"></span>
                    <span className="burgerMenu"></span>
                    <span className="burgerMenu"></span>
                </button>
                <ul id="burgerList" className="linkList linkListBlock">
                    {
                        navMenuOpts.map((opt) => (
                            <li key={opt.id} className="blockSiteNavOpt">
                                <a href="">{opt.text}</a>
                            </li>
                        ))
                    }
                </ul>

            </nav>
        </header>
    );
};

export default Header;
