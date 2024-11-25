import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="content">
                <main className="content_main">
                    <section className="content_primary">
                        <h2>Uh oh!</h2>
                        <p>An Unknown Error has occured!</p>
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}
