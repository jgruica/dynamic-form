# Dynamic Form

A dynamic form app

## Getting Started

* Clone Repo
* Install Dependencies - `npm install`
* Run `npm run dev`
* Run tests `npm test`


### User Interface

1. Initial screen. The 'Adult' and 'Children' drop-down fields for rooms 2, 3, and 4 are disabled.

![inital](/screenshots/case_one.png)

2. If the user checks the 'Room 3' checkbox, Room 2 should auto-check.
![case_two](/screenshots/case_two.png)

 3. If the user checks the 'Room 4' checkbox, Room 2 and Room 3 should auto-check.

![case_three](/screenshots/case_three.png)

4. Upon clicking 'Submit', values are saved in local storage and upon reload all previously selected values are pre-populated.


## Built With

* [ReactJS](https://reactjs.org/)
* [NextJS](https://nextjs.org/)
* [StyledComponents](https://www.styled-components.com/)
* [Jest/Enzyme](https://airbnb.io/enzyme/docs/guides/jest.html)

## Authors

* **Jelena Gruica** - https://github.com/jgruica
