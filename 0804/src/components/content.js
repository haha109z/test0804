import React, { useState, useEffect } from "react";
import { DropdownButton, DropdownMenu, Dropdown } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

function Content() {
  return (
    <>
      <div className="content">
        <div className="header">
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="main">
          <form noValidate autoComplete="off">
            <input
              className="input"
              onkeyup="value=value.replace(/[^\d\./]/g,'')"
              placeholder="1"
              maxlength="1"
              type="text"
            />
            <input
              className="input"
              onkeyup="value=value.replace(/[^\d\./]/g,'')"
              placeholder="2"
              maxlength="1"
              type="text"
            />
            <input
              className="input"
              onkeyup="value=value.replace(/[^\d\./]/g,'')"
              placeholder="3"
              maxlength="1"
              type="text"
            />
            <input
              className="input"
              onkeyup="value=value.replace(/[^\d\./]/g,'')"
              maxlength="1"
              placeholder="4"
              type="text"
            />
          </form>

          <button className="button-skip">skip</button>
          <button className="button-submit">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Content;
