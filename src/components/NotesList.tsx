import React from "react";
import { Note } from "../models/notes.models";
import Notes from "./Notes";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NotesList = ({ notes, setNotes }: Props) => {
  const deleteHandler = (id: string) => {
    return setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = () => {
    return (
      <div className="">
        {notes.map((note) => (
          <Notes key={note.id} note={note} deleteHandler={deleteHandler} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2 className="mt-5">Notes</h2>
      {notes.length === 0 && (
        <p className="text-center fw-bold fs-3 py-3">No notes created yet.</p>
      )}
      <div>{renderNotes()}</div>
    </div>
  );
};

export default NotesList;
