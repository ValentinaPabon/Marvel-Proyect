import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);

  const listComics = useFetch(
    `http://gateway.marvel.com/v1/public/series?ts=1&apikey=453e4ced1c12993187c62032ccc1a6f3&hash=31b1157d999ab089756abf297ddf97d3&orderBy=startYear&limit=20`
  );

  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Cómics</Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
