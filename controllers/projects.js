import fsPromises from 'node:fs/promises';

//the dumb__filename and __dirname import to make them functional :|
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectsPath = path.join(__dirname,'data', 'projects.json');
const getData = async () => {
    try {
        const projects = await fsPromises.readFile(projectsPath, { encoding: 'utf8' });
        console.log(projects);
        return projects;
    } catch (err) {
        console.error(err.message);
    }
}

export default getData;