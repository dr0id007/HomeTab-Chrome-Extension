import React from "react";
import {
  OverlayTrigger,
  Popover,
  Button,
  Tab,
  Row,
  Col,
  Nav
} from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import Toggle from "../UIComponents/Toggle"


import "../../style/settings.css"

const Settings = () => {
  return (
    <OverlayTrigger
      trigger="click"
      key="bottom"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Title as="h3" className="setting-heading">Settings</Popover.Title>
          <Popover.Content>
            {/* <strong>Holy guacamole!</strong> Check this info. */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3} className="left-content">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Platforms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">TimeZone</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <ul>
                        <li><h5 className="platform-name">Hackerearth</h5> <Toggle/>
                        </li>
                        <li><h5 className="platform-name">Codechef</h5><Toggle/></li>
                        <li><h5 className="platform-name">Codeforces</h5><Toggle/></li>
                        <li><h5 className="platform-name">Hackerrank</h5><Toggle/></li>
                        <li><h5 className="platform-name">Topcoder</h5><Toggle/></li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">second</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Popover.Content>
        </Popover>
      }
    >
      <Button className="settings-btn" variant="secondary">
        <FiSettings />
      </Button>
    </OverlayTrigger>
  );
};

export default Settings;
