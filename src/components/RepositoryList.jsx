import { RepositoryItem } from "./RespositoryItem";

const repository = {
    name: "Bhaskalc",
    description: "Calculator",
    link: "http://github.com/ruymon/bhaskalc"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista da Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}