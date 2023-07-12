import React, { FormEvent, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Note } from "../models/notes.models";
import Alert from "react-bootstrap/Alert";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

// const getLocalNotes = () => {
//   let notes = localStorage.getItem("notes");

//   if (notes) {
//     return JSON.parse(localStorage.getItem("notes"));
//   } else {
//     return [];
//   }
// };

const CreateNotes = ({ notes, setNotes }: Props) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<string>("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
      ...notes,
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    // (colorRef.current as HTMLInputElement).value = "";
  };
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div>
      <h2>Create Note</h2>
      {error && (
        <Alert key="danger" variant="danger">
          {error}
        </Alert>
      )}
      <Form onSubmit={submitHandler}>
        <Form.Group className="m-3" controlId="formBasicTitle">
          <Form.Label>Note Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title..."
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicText">
          <Form.Label>Note Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Title..."
            rows={3}
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className="m-3">
          <Form.Label htmlFor="colorInput">Notes color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateNotes;
