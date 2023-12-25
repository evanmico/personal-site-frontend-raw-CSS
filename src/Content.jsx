const Content = () => {
    document.title = "Ivan";
    return (
        <div className="content">
            <main>
                <section className="title">
                    <h2>Hello! I am evanmico.dev</h2>
                </section>

                <section className="content">
                    <p>
                        I am a full stack web developer with a specialization in
                        React, node, nextjs, mysql...
                    </p>
                    <h2>Basically, a lot of things.</h2>

                    <h2>
                        This is my personal site where you can see some of my
                        previous projects and learn a little about me :)
                    </h2>
                </section>
                <div className="button">
                    <button className="button-element"></button>
                    <button className="button-element"></button>
                </div>
            </main>
        </div>
    );
};

export default Content;
