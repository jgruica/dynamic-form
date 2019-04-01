import * as React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Home from "../components/src/Home";
import Room from "../components/src/Room";

describe("Home Page", () => {
  describe("Home Page", () => {
    it("should render 4 Rooms", function () {
      const wrapper = shallow(<Home />);
      expect(wrapper.find(Room)).to.have.lengthOf(4);
    })
  }); 
})