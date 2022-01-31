import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation.tsx'
import './App.css';
import MainView from "./components/MainView.tsx";

function App() {
  return (
      <Container>
        <Navigation />
        <MainView />
    </Container>
  );
}

export default App;
