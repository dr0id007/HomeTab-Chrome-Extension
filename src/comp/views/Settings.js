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
import Platform from "../UIComponents/Settings/Platform";
import Background from "../UIComponents/Settings/Background";
import TimeZone from "../UIComponents/Settings/Timezone";

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
            <div className="ml-2 mt-2 mb-1">Settings</div>
          </Popover.Title>
          <Popover.Content>
            {/* <strong>Holy guacamole!</strong> Check this info. */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={5} className="left-content">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="platform">
                        <h6>Platforms</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="timezone">
                        <h6>TimeZone</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="quotes">
                        <h6>Quotes</h6>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="background">
                        <h6>Background</h6>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={7}>
                  <Tab.Content>
                    <Tab.Pane eventKey="platform">
                      <Platform />
                    </Tab.Pane>
                    <Tab.Pane eventKey="timezone">
                      <TimeZone />
                    </Tab.Pane>
                    <Tab.Pane eventKey="quotes">Quotes settings</Tab.Pane>
                    <Tab.Pane eventKey="background">
                      <Background />
                    </Tab.Pane>
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
