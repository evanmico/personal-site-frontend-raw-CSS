const Header = () => {
    return (
        <header>
            <section className="logo-name">
                <img src="" alt="logo" />
                <h2>evanmico.dev</h2>
            </section>

            <h1>Portfolio Site</h1>
            <nav aria-label="primary-site-navigation">
                <ul className="linkList linkList_siteNav">
                    <li>
                        <a href="">About Me</a>
                    </li>
                    <li>
                        <a href="">My Projects</a>
                    </li>
                    <li>
                        <a href="">Contact Info</a>
                    </li>
                    <li>
                        <a href="">My Company</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
