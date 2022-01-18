
import { useEffect, useState } from 'react';


function Repos() {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/emintolgahanpolat/repos")
            .then(res => res.json())
            .then(
                (result) =>
                    setItems(result)
            ).catch((error) => {
                setError(error);
            })
    }, [])

    if (items.length > 0) {
        return (
            <div>{items.length} repos</div>
        );
    }

    if (error != null) {
        return <div>Error : {error}</div>
    }
    return <div>Loading...</div>
}
export default Repos;
