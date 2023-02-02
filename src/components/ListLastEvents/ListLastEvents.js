import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvents.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

export default function ListLastEvents() {
  const lastEventsFetch = useFetch(
    `http://gateway.marvel.com/v1/public/series?ts=1&apikey=453e4ced1c12993187c62032ccc1a6f3&hash=31b1157d999ab089756abf297ddf97d3&orderBy=startYear&limit=20`
  );

  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>

      <Container>
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
}
