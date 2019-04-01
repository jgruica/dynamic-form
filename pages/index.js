import React from "react";
import Home from "../components/src/Home";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const App = () => (
	<Container>
		<Home />
	</Container>
)

export default App;