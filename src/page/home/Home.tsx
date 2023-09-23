import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useEffect, useState } from 'react';

function Home() {



    const [source, setSource] = useState("");

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/emintolgahanpolat/emintolgahanpolat/main/README.md")
            .then(res =>

                res.text()
            )
            .then(
                (result) =>
                    setSource(result)

            );
    })
    return (
        <div className="Home container">
            <MarkdownPreview source={source} wrapperElement={{ "data-color-mode": "light" }} />
        </div >
    );
}

export default Home;
