import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Badge } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';
import Repos from '../blog/component/Repos';
function SocialMedia() {

    return (
        <ListGroup variant="flush" style={{ textAlign: 'start' }} >
            <ListGroup.Item action href="https://www.github.com/emintolgahanpolat" target="_blank" className="d-flex justify-content-between align-items-start">
                <div className=' me-auto'><FaGithub /> github</div>
                <Badge >
                    <Repos />
                </Badge></ListGroup.Item>
            <ListGroup.Item action href="https://emintolgahanpolat.medium.com" target="_blank"><FaMedium /> medium</ListGroup.Item>

            <ListGroup.Item action href="https://www.linkendin.com/emintolgahanpolat" target="_blank"><FaLinkedin /> linkendin</ListGroup.Item>
            <ListGroup.Item action href="https://www.twitter.com/emintolgahanplt" target="_blank"><FaTwitter /> twitter</ListGroup.Item>
            <ListGroup.Item action href="https://www.instagram.com/emintolgahanpolat" target="_blank"><FaInstagram /> instagram</ListGroup.Item>
            <ListGroup.Item action href="https://www.facebook.com/emintolgahanpolat" target="_blank"><FaFacebook /> facebook</ListGroup.Item>


        </ListGroup>
    );
}

export default SocialMedia;
