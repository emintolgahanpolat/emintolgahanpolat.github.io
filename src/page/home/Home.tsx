import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect, useState } from 'react';

function Home() {


    const [error, setError] = useState(null);
    const [source, setSource] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/emintolgahanpolat/emintolgahanpolat/main/README.md")
            .then(res =>

                res.text()
            )
            .then(
                (result) =>
                    setSource(result)

            ).catch((error) => {
                setError(error);
            })
    })
    return (
        <div className="Home container">
            <MarkdownPreview source={source} />
        </div >
    );
}

export default Home;
