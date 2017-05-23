import React from "react";
import styled from "styled-components";
import Segment from "../components/style/segment";
import { connect } from "react-redux";
import * as actions from "../actions";

class Topics extends React.Component {
  componentDidMount = () => {
    this.props.fetchDomains();
  };
  render() {
    console.log(this.props.domains);
    const { domains } = this.props;
    return (
      <Container>
        <Header>TOPICS</Header>
        <ContainerSegment>
          {domains.map(topic => <Segment {...topic} />)}
        </ContainerSegment>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    domains: state.domains
  };
}

export default connect(mapStateToProps, actions)(Topics);

const Container = styled.div`
    margin: 2rem auto;
`;

const Header = styled.h2`

`;

const ContainerSegment = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
