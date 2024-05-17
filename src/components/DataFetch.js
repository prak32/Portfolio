import React, { useEffect, useState } from 'react';

const DataFetch = () => {
    const API = "https://hn.algolia.com/api/v1/search?query=html";
    const [authors, setAuthors] = useState([]);

    const fetchApiData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data); // Entire data object
            console.log(data.hits); // Array of hits
            setAuthors(data.hits.map(hit => hit.author));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiData(API);
    }, []);

    return (
        <div>
            <h2>Author Names</h2>
            <ul>
                {authors.map((author) => (
                    <li>{author}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetch;
