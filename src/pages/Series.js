import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `http://gateway.marvel.com/v1/public/series?ts=1&apikey=453e4ced1c12993187c62032ccc1a6f3&hash=31b1157d999ab089756abf297ddf97d3&orderBy=startYear&limit=20`
  );

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}
