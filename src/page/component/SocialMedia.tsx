import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Badge } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter, FaDraft2Digital, FaAndroid, FaDev, FaDiscord } from 'react-icons/fa';

function SocialMedia() {

    return (
        <ListGroup variant="flush" style={{ textAlign: 'start' }} >
            <ListGroup.Item action href="https://www.github.com/emintolgahanpolat" target="_blank" >
                <FaGithub /> github
            </ListGroup.Item>

            <ListGroup.Item action href="https://pub.dev/publishers/emintolgahanpolat.com/packages" target="_blank"><FaDev /> pub.dev</ListGroup.Item>
            <ListGroup.Item action href="https://emintolgahanpolat.medium.com" target="_blank"><FaMedium /> medium</ListGroup.Item>
            <ListGroup.Item action href="https://www.linkendin.com/emintolgahanpolat" target="_blank"><FaLinkedin /> linkendin</ListGroup.Item>
            <ListGroup.Item action href="https://www.twitter.com/emintolgahanplt" target="_blank"><FaTwitter /> twitter</ListGroup.Item>
            <ListGroup.Item action href="https://www.instagram.com/emintolgahanpolat" target="_blank"><FaInstagram /> instagram</ListGroup.Item>
            <ListGroup.Item action href="https://www.facebook.com/emintolgahanpolat" target="_blank"><FaFacebook /> facebook</ListGroup.Item>
            <ListGroup.Item action href="https://www.discordapp.com/users/439125096242741248" target="_blank"><FaDiscord /> discord</ListGroup.Item>

        </ListGroup>
    );
}

export default SocialMedia;
