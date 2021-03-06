import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FooterStyle } from '../style/index';
import { Button, Popup, Icon } from 'semantic-ui-react'
function Footer() {
    return (
        <FooterStyle>
            <div id="footer-main">
                <Row>
                    <Col>
                        <h6 className="text-right" id="meet-team">Meet the Team</h6>

                        <li><a href="https://github.com/ameliadavis" target="_blank">Amy Altman</a></li>
                        <li><a href="https://github.com/MustafaKhairalla" target="_blank">Mustafa Khairalla</a></li>
                        <li><a href="https://github.com/cristian634" target="_blank">Cristian Robinson</a></li>

                    </Col>
                    <Col >
                        <br />
                        <li className="text-left"><a href="https://github.com/jcbpetersen1995" target="_blank">Jake Petersen</a></li>
                        <li className="text-left"><a href="https://github.com/Ellen0404" target="_blank">Elena Demidionok</a></li>

                    </Col>
                    <Col>
                        <h6 id="created-with" className="text-center">Created With</h6>
                        <li>Semantic-UI</li>
                        <li>Node.js</li>
                        <li>React </li>

                    </Col>
                    <Col>
                        <br />
                        <li>Github</li>
                        <li>Javascript</li>
                        <li>CSS</li>

                    </Col>
                    <Col>

                    </Col>
                </Row>

            </div>
        </FooterStyle>
    )
};
export default Footer;
