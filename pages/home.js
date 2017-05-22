import React from "react";
import Page from "../components/page";
import PageWidth from "../components/pageWidth";
import styled from "styled-components";

import Topics from "../components/topics";

export default class extends React.Component {
  render() {
    return (
      <Page>
        <FullBackground>
          <HeaderContent>
            Welcome to memorize.now, where you learn everthing around webdevelopment!
          </HeaderContent>
        </FullBackground>
        <PageWidth>
          <Topics />
        </PageWidth>
      </Page>
    );
  }
}

const FullBackground = styled.div`
    width: 100%;
    background-color: #29af6a;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderContent = styled.div`
    max-width: 1200px;
    margin: -1rem auto 0;
    color: #fff;
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.4;
`;
