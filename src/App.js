import React from "react";
import styled from "styled-components";
import MainGrade from "./main_grade";
import { Route } from "react-router-dom"
import Detail from "./detail";

function App() {
  return (
    <AppWrap className="App">
      <Container>
        <Route path = "/" exact>
          <MainGrade />
        </Route>
        <Route path = "/detail/:Day" exact>
          <Detail/>
          </Route>
      </Container>
    </AppWrap>
  )
}

const AppWrap = styled.div`
background-color: #eee;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
`;

const Container = styled.div`
background-color: #fff;
width: 50vw;
max-width: 350px;
margin: auto;
height: 80vh;
padding: 16px;
border: 1px solid #ddd;
border-radius: 5px;
`;

export default App;
