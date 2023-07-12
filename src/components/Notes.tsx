import Card from "react-bootstrap/Card";
import { Note } from "../models/notes.models";
import Button from "react-bootstrap/Button";

type Props = {
  note: Note;
  deleteHandler: (id: string) => void;
};

const Notes = ({ note, deleteHandler }: Props) => {
  return (
    <div>
      <Card className="my-3">
        <Card.Body style={{ backgroundColor: note.color }}>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => deleteHandler(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
