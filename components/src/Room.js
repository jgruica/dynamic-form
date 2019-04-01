import React, { Component } from "react";
import styled from "styled-components";

const RoomWrapper = styled.div`
  border: 1px solid #81cfe0;
  border-radius: 4px;
  width: 160px;
  margin-right: 20px;
`
const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid #81cfe0;
  font-weight: bold;
  background: ${props => props.checked === false ? "#bdc3c7" : "#F8F8F8"};
  color: ${props => props.checked === false ? "#6c7a89" : "#black"};
`
const RoomBody = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${props => props.checked === false ? "#bdc3c7" : "white"};
  color: ${props => props.checked === false ? "#6c7a89" : "#black"};
`


const Checkbox = props => (
  <input type="checkbox" {...props} />
)

export default class Room extends Component {
  render() {
    const { 
      checked, 
      handleCheckboxChange, 
      header, 
      adults,
      children, 
      handleAdultDropdownChange,
      handleChildrenDropdownChange,
    } = this.props;


    return (
        <RoomWrapper>
          <Header checked={checked}>
            {checked !== undefined ?
              <Checkbox
                style={{ marginRight: "10px" }}
                checked={checked}
                onChange={handleCheckboxChange}
              />
              : ""}
            {header}</Header>
          <RoomBody checked={checked}>
            <div className=".Adults">
              Adults
              (+18)
            <select style={{ marginTop: "10px" }} 
              disabled={checked === false}
              value={adults}
              onChange={handleAdultDropdownChange}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
            <div className=".Children" style={{ justifyContent: "flex-end" }}>
              Children
              (0-17)
            <select style={{ marginTop: "10px" }} 
              disabled={checked === false}
              value={children}
              onChange={handleChildrenDropdownChange}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
            </div>
          </RoomBody>
        </RoomWrapper>
    )
  }
};