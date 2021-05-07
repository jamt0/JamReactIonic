import Scaffold from "components/Scaffold/Scaffold";
import React, { FunctionComponent } from "react";

type Props = {
  texts: any;
};

const HomeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.home}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content></Scaffold.Content>
    <Scaffold.Footer></Scaffold.Footer>
  </Scaffold>
);

export default HomeView;
