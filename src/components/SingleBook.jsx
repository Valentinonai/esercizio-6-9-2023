import { Badge, Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col xs="6" md="4" lg="3" xl="2">
      <Card style={{ overflow: "hidden", backgroundColor: "#9b9b9b", boxShadow: "0 0 2px 2px gray" }}>
        <Card.Img
          variant="top"
          src={props.book.img}
          style={{ borderRadius: "0 0 5px 5px", boxShadow: "0 0 2px 2px black" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              color: "#363434",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "start",
              marginBottom: "20px",
            }}
          >
            {props.book.title}
          </Card.Title>
          <Card.Text className="d-flex justify-content-end">
            <Badge bg="dark">{props.book.price} $</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
