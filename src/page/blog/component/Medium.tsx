import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

function Medium() {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40emintolgahanpolat")
            .then(res => res.json())
            .then(
                (result) =>
                    setItems(result.items)

            ).catch((error) => {
                setError(error);
            })
    }, [])

    if (items.length > 0) {
        return (
            <div>
                {
                    items.map((item: any) => (
                        <Card className='mb-3'>
                            <Card.Header className="d-flex justify-content-between align-items-start" >

                                <h5 >{item["title"]} </h5>
                                <Button size="sm" href={item["link"]} target="_blank" className='ms-auto' variant="light">   Oku <FaChevronRight /></Button>

                            </Card.Header>

                            <Card.Body>
                                <Card.Text>
                                    <div dangerouslySetInnerHTML={{ __html: item["description"] }} />
                                </Card.Text>

                            </Card.Body>
                            {item["categories"].length > 0 ? <Card.Footer  >
                                <div> {item["categories"].toString()}</div>
                            </Card.Footer> : null
                            }
                        </Card>

                    ))
                }
            </div>
        );
    }

    if (error != null) {
        return <div>Error : {error}</div>
    }
    return <div>Loading...</div>
}
export default Medium;
