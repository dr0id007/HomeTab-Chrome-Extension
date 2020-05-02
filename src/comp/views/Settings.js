import React from "react";
import {
  OverlayTrigger,
  Popover,
  Button,
  Tab,
  Row,
  Col,
  Nav,
} from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import Toggle from "../UIComponents/Toggle";

import "../../style/settings.css";

const Settings = () => {
  return (
    <OverlayTrigger
      trigger="click"
      key="bottom"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Title as="h3" className="setting-heading">
            Settings
          </Popover.Title>
          <Popover.Content>
            {/* <strong>Holy guacamole!</strong> Check this info. */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3} className="left-content">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="platform">Platforms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="timezone">TimeZone</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="platform">
                      <ul>
                        <h4 className="platform">Available Platforms </h4>
                        <hr />
                        <li>
                          <p className="platform-name">Hackerearth</p>
                          <Toggle />
                        </li>
                        <hr className="hr-settings" />
                        <li>
                          <p className="platform-name">Codechef</p>
                          <Toggle />
                        </li>
                        <hr className="hr-settings" />
                        <li>
                          <p className="platform-name">Codeforces</p>
                          <Toggle />
                        </li>
                        <hr className="hr-settings" />
                        <li>
                          <p className="platform-name">Hackerrank</p>
                          <Toggle />
                        </li>
                        <hr className="hr-settings" />
                        <li>
                          <p className="platform-name">Topcoder</p>
                          <Toggle />
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="timezone">timezone settings</Tab.Pane>
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
