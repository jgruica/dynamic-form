import React, { Component } from "react";
import Room from "./Room";
import styled from "styled-components";


const RoomsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const Button = styled.button`
  background: #81cfe0;
  color: white;
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid #81cfe0;
  border-radius: 3px;
`;


export default class Home extends Component {
  state = {
    rooms: [
      {
        name: 'Room 1',
        checked: undefined,
        adults: 0,
        children: 0
      },
      {
        name: 'Room 2',
        checked: false,
        adults: 0,
        children: 0
      },
      {
        name: 'Room 3',
        checked: false,
        adults: 0,
        children: 0
      },
      {
        name: 'Room 4',
        checked: false,
        adults: 0,
        children: 0
      }
    ],
  }
  
  componentDidMount() {
    if (localStorage.getItem( "rooms" )) {
      const rooms = JSON.parse( localStorage.getItem("rooms") );
      this.setState({ rooms });
    }
  }

  handleCheckboxChange = (e, index) => {
    const isChecked = e.target.checked
    const clones = [...this.state.rooms]

    if (isChecked) {
      for (let i = 1; i <= index; ++i) {
        clones[i] = Object.assign({}, clones[i], { checked: true });
      }
    } else {
      for (let i = index; i < this.state.rooms.length; ++i) {
        clones[i] = Object.assign({}, clones[i], { checked: false });
      }
    }
    
    this.setState({
      rooms: clones
    })
  }

  handleAdultDropdownChange = (e, index) => {
    const clones = [...this.state.rooms]
    clones[index] = Object.assign({}, clones[index], { adults: e.target.value })
    this.setState({ rooms: clones });
  }

  handleChildrenDropdownChange = (e, index) => {
    const clones = [...this.state.rooms]
    clones[index] = Object.assign({}, clones[index], { children: e.target.value })
    this.setState({ rooms: clones });
  }

  onSubmit = () => {
    const { rooms } = this.state;
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }

  render() {
    const { rooms } = this.state;


    return (
      <div>
        <RoomsContainer>
          {rooms && rooms.map((room, i) => 
            <Room key={i} header={room.name} checked={room.checked} 
              handleCheckboxChange={e => this.handleCheckboxChange(e, i)}
              adults={room.adults} children={room.children}
              handleAdultDropdownChange={e => this.handleAdultDropdownChange(e, i)}
              handleChildrenDropdownChange={e => this.handleChildrenDropdownChange(e, i)}
              />
          )}
        </RoomsContainer>
        <Button onClick={this.onSubmit}>
          Submit
        </Button>
      </div>
    )
  }
}