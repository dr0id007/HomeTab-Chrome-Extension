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
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">first</Tab.Pane>
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
