import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
export default function Root() {
    return (
        <>
            <div className="app">
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    );
}