import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { Note } from "./models/notes.models";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

const getLocalNotes = () => {
  let notes = localStorage.getItem("notes");

  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
};
// [
//   {
//     id: new Date().toString(),
//     title: "Meeting",
//     text: "Schedule Meeting with UI/UX team",
//     color: "#dfdfdf",
//     date: new Date().toString(),
//   },
// ]
function App() {
  const [notes, setNotes] = useState<Note[]>(getLocalNotes);
  return (
    <>
      <Header />

      <Container className="mt-4">
        <CreateNotes notes={notes} setNotes={setNotes} />
      </Container>
      <Container>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
