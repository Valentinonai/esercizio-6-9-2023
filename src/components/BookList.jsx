import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Row className="p-5 bg-dark text-secondary gy-3 pt-0">
      <h2 className="display-1 mb-5">{props.books[0].category.toUpperCase()}</h2>
      {props.books.map((elem, index) => (
        <SingleBook book={elem} key={`p:${index}`} />
      ))}
    </Row>
  );
};

export default BookList;
