import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Page.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../banner.jpg';

export const Page = () => {
    const {theme} = useContext(ThemeContext);

    return(
        <div className={`page ${theme}`}>
            <div className="bannerImg">
                <img src={banner} alt="BannerImage" width='100%'/>
            </div>
            <Row className="section-1">
                <div className="text-wrap">
                    <h1>Simple Page With Theme Switcher</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus malesuada, sagittis purus facilisis, congue erat. Nullam tincidunt laoreet leo nec varius. Etiam placerat tristique dui, nec elementum augue elementum sit amet. Nam hendrerit tempus lobortis. Morbi ac ante laoreet, sodales diam nec, mollis nibh. Proin posuere egestas varius. Sed egestas convallis lobortis. Maecenas quis tortor viverra, consectetur ex eu, ultricies felis. Donec accumsan ligula vitae mollis semper. Morbi nisi ante, auctor ut nibh vel, luctus bibendum eros. Phasellus pulvinar justo non tempus lacinia. Maecenas at elementum nibh. Nunc dignissim fringilla diam vel vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
            </Row>
            <Container>
            <Row className="section-2">
                <Col>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>consectetur adipiscing elit. Mauris ac lectus malesuada, sagittis purus facilisis, congue erat. Nullam tincidunt laoreet leo nec varius. Etiam placerat tristique dui, nec elementum augue elementum sit amet. Nam hendrerit tempus lobortis. Morbi ac ante laoreet</p>
                </Col>
                <Col>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>consectetur adipiscing elit. Mauris ac lectus malesuada, sagittis purus facilisis, congue erat. Nullam tincidunt laoreet leo nec varius. Etiam placerat tristique dui, nec elementum augue elementum sit amet. Nam hendrerit tempus lobortis. Morbi ac ante laoreet</p>
                </Col>
                <Col>
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>consectetur adipiscing elit. Mauris ac lectus malesuada, sagittis purus facilisis, congue erat. Nullam tincidunt laoreet leo nec varius. Etiam placerat tristique dui, nec elementum augue elementum sit amet. Nam hendrerit tempus lobortis. Morbi ac ante laoreet</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};
