import * as React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Room from "../components/src/Room";

describe("Room", () => {
  describe("Room", () => {
    it("should not have checkbox if checked is undefined", function () {
      const wrapper = shallow(<Room checked={undefined} />);
      expect(wrapper.find("Checkbox").exists()).to.equal(false);
    }),

    it("should have checkbox if checked is false", function () {
      const wrapper = shallow(<Room checked={false} />);
      expect(wrapper.find("Checkbox").exists()).to.equal(true);
    }),

    it("should have disabled adults dropdown if checked is false", function () {
      const wrapper = shallow(<Room checked={false} />);
      const adults = wrapper.find("[className='.Adults']");
      const select = adults.find("select");
      expect(select.is("[disabled]")).to.equal(true);
    })
  }); 
})