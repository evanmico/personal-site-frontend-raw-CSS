//import { useFetch } from 'react-async';
//import fsPromises from 'node:fs/promises';
//import getData from '../controllers/projects.js'

//the dumb__filename and __dirname import to make them functional :|
// import { fileURLToPath } from "url";
// import path, { dirname } from "path";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const projectsPath = path.join(__dirname,'data', 'projects.json');
// const projectsPath = '../data/projects.json';
// const getData = async () => {
//     try {
//         const projects = await fsPromises.readFile(projectsPath, { encoding: 'utf8' });
//         console.log(projects);
//         return projects;
//     } catch (err) {
//         console.error(err.message);
//     }
// }
import { useState } from 'react';


const Content = () => {
    //const [ name, setName ] = useState('Bean');
    //const { data, error } = useFetch(getData());
    //if (error) return error.message;
    const [projects, setProjects] = useState(
        [
            {
                "id": 0,
                "name": "mkDiscordBot",
                "date": "03/06/2023",
                "description": "A bot that keeps a live leaderboard of the current timetrial top times in a designated thread."
            },
            {
                "id": 1,
                "name": "Physical Healthcare office Client Managment System",
                "date": "04/03/2024",
                "description": "A web app that acts as a portal for clients to schedule appointments with a physical therapist."
            },
            {
                "id": 2,
                "name":"Volunteering App",
                "date":"xx/yy/zzzz",
                "description":"App that helps make it as simple as possible for volunteers to volunteer. Built during a hackathon."
            },
            {
                "id": 3,
                "name":"Ransomware Anomaly Detection",
                "date":"xx/yy/zzzz",
                "description":"Team member of project that was done as a capstone project."
            },
            {
                "id": 4,
                "name":"Bran",
                "date":"xx/yy/zzzz",
                "description":"Krew"
            },
            {
                "id": 5,
                "name":"Stew",
                "date":"xx/yy/zzzz",
                "description":"Bluff"
            }
        ]
    );
    const [work, setWork] = useState(
        [
            {
                "id": 0,
                "name": "FMS Solutions",
                "date": "05/01/2019-09/12/2021",
                "description": "Worked as developer for accounting firm"
            }
        ]
    );
    document.title = "evanmico dev site";
    return (
        <div className="content">
            <main className="content_main">
                <section className="content_primary">
                    <h2>Welcome!</h2>
                    <p>
                        This is my personal site where you can see some of my
                        previous projects and learn a little about me :)
                    </p>
                </section>
                <section className="content_primary">
                    <h2>I am evanmico</h2>
                    <p>
                        A full stack web developer with a specialization in
                        mysql, nodejs, expressjs, and react. I am also well-versed in Azure. 
                        I also run a business
                        called RosyDev LLC where I create and maintain sites for clients.
                    </p>
                </section>
                <section className="content_action">
                    <h2>
                        Feel free to explore!
                    </h2>
                    <div className="content_action_button">
                        <button className="button-element">About Me</button>
                        <button className="button-element">My Projects</button>
                    </div>
                </section>
                <section className="content_primary">
                    <h2>
                        My Projects
                    </h2>
                    <ul className="projects">
                        {projects.map((project) => (
                            <li key={project.id} className="project">
                                <div className='project_header'>
                                    <h3>{project.name}</h3>
                                    <h3>{project.date}</h3>
                                </div>
                                <p>{project.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h2>
                        My Prior Work Experience
                    </h2>
                    <ul className="projects">
                        {work.map((job) => (
                            <li key={job.id} className="project">
                                <div className='project_header'>
                                    <h3>{job.name}</h3>
                                    <h3>{job.date}</h3>
                                </div>
                                <p>{job.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Content;
