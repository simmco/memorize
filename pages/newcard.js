import React from "react";
import Page from "../components/page";
import PageWidth from "../components/pageWidth";
import styled from "styled-components";
import Markdown from "react-markdown";
import { Button, Input, Dropdown, Modal } from "semantic-ui-react";
import initStore from "../utils/store";
import withRedux from "next-redux-wrapper";
import * as actions from "../actions";

import DomainSelect from "../components/newCard/domainSelect";
import CategorySelect from "../components/newCard/categorySelect";

const array = [
  { text: "HTML", value: "HTML" },
  { text: "CSS", value: "CSS" },
  { text: "JavaScript", value: "Javascript" }
];

const buildObject = function(domains) {
  return domains.map(domain => {
    return { text: domain.topic, value: domain.topic, key: domain._id };
  });
};

class NewCard extends React.Component {
  state = {
    description: " ",
    selectedDomain: ""
  };
  componentDidMount = () => {
    this.props.fetchDomains();
  };
  handleInput = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleDomainSelect = (e, obj) => {
    this.setState({ selectedDomain: obj.value });
    this.props.fetchDomainsCategories(obj.value);
  };
  render() {
    const { domains, categories } = this.props;
    const fetchedCategories = categories.length === 0 ? false : true;
    return (
      <Page>
        <PageWidth>
          <Container>
            <NewCardTitle>
              Add New Card
            </NewCardTitle>
            <ContainerTopicSelection>

              <DomainSelect
                handleDomainSelect={this.handleDomainSelect}
                array={buildObject(domains)}
              />

              <CategorySelect
                domain={this.state.selectedDomain}
                fetching={!fetchedCategories}
                array={buildObject(categories)}
              />

              <DefineTopic>
                <Text>Topic:</Text>
                <Input placeholder="Define..." />
              </DefineTopic>

            </ContainerTopicSelection>

            <h2>Explanation:</h2>
            <ContainerCardInput>
              <FormContainer
                onChange={this.handleInput}
                value={this.state.description}
              />
              <Markdown source={this.state.description} />
            </ContainerCardInput>

          </Container>
        </PageWidth>
      </Page>
    );
  }
}

function mapStateTopProps(state) {
  return {
    domains: state.domains,
    categories: state.categories
  };
}

export default withRedux(initStore, mapStateTopProps, actions)(NewCard);

const Container = styled.div`
    margin: 2rem auto;
`;

const NewCardTitle = styled.h2`
`;

const ContainerTopicSelection = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DefineTopic = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 272px;
  margin: 2rem 0;
`;

const StyledDropdown = styled(Dropdown)`
  max-width: 200px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ContainerCardInput = styled.div`
    display: flex;
`;

const FormContainer = styled.textarea`
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    height: 500px;
    width: 450px;
    max-width: 450px;
    margin-right: 4rem;
`;

const StyledMarkdown = styled(Markdown)`
    border: 1px solid #ccc;
`;
