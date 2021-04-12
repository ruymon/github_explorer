import { useState, useEffect } from "react";
import { RepositoryItem } from "./RespositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('http://api.github.com/users/ruymon/repos')
           .then(response => response.json())
           .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository} />
                })}
            </ul>
        </section>
    );
}