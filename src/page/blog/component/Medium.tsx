import { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
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
            <Row>
                {
                    items.map((item: any) => (
                        <Col md={6} xs={12}>
                            <Card className='mb-3'>

                                <Card.Header className="d-flex justify-content-between align-items-start" >

                                    <h5 >{item["title"]} </h5>
                                </Card.Header>

                                <Card.Body>
                                    <Card.Text>

                                        {/*  <div dangerouslySetInnerHTML={{ __html: item["description"] }} />*/}

                                        {item["categories"].length > 0 ?
                                            <div> {item["categories"].toString()}</div>
                                            : null
                                        }
                                    </Card.Text>

                                    <Button size="sm" href={item["link"]} target="_blank" className='ms-auto' variant="light">   Oku <FaChevronRight /></Button>

                                </Card.Body>


                            </Card></Col>

                    ))
                }
            </Row>
        );
    }

    if (error != null) {
        return <div>Error : {error}</div>
    }
    return <div>Loading...</div>
}
export default Medium;
