const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
            <nav aria-label="my-socials">
                <ul className="linkList linkList_socials">
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">X</a>
                    </li>
                    <li>
                        <a href="">LinkedIn</a>
                    </li>
                    <li>
                        <a href="">YouTube</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
