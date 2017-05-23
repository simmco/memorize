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

const buildDropdownObject = function(domains) {
  return domains.map(domain => {
    return { text: domain.topic, value: domain._id, key: domain._id };
  });
};

class NewCard extends React.Component {
  state = {
    selectedDomain: "",
    selectedCategory: "",
    cardTopic: "",
    cardDescription: " "
  };
  componentDidMount = () => {
    this.props.fetchDomains();
  };
  handleDomainSelect = (e, obj) => {
    console.log(obj);
    this.setState({ selectedDomain: obj.value });
    this.props.fetchDomainsCategories(obj.value);
  };
  handleCategorySelect = (e, obj) => {
    console.log(obj.value);
    this.setState({ selectedCategory: obj.value });
  };
  addNewDomain = (topic, description) => {
    this.props.addNewDomain(topic, description);
  };
  addNewCategory = (topic, description, domainId) => {
    this.props.addNewCategory(topic, description, domainId);
  };
  addNewCard = () => {
    const { selectedCategory, cardTopic, cardDescription } = this.state;
    this.props.addNewCard(cardTopic, cardDescription, selectedCategory);
  };
  render() {
    const { domains, categories } = this.props;
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
                array={buildDropdownObject(domains)}
                addNewDomain={this.addNewDomain}
              />

              <CategorySelect
                domain={this.state.selectedDomain}
                handleCategorySelect={this.handleCategorySelect}
                array={buildDropdownObject(categories)}
                addNewCategory={this.addNewCategory}
              />

              <DefineTopic>
                <Text>Topic:</Text>
                <TopicInput
                  onChange={e => this.setState({ cardTopic: e.target.value })}
                  value={this.state.cardTopic}
                  placeholder="Define..."
                />
              </DefineTopic>

            </ContainerTopicSelection>

            <h2>Explanation:</h2>
            <ContainerCardInput>

              <FormContainer
                onChange={e =>
                  this.setState({ cardDescription: e.target.value })}
                value={this.state.cardDescription}
              />
              <Markdown source={this.state.cardDescription} />

            </ContainerCardInput>
            <Button onClick={this.addNewCard} color="green">Save</Button>
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
  max-width: 400px;
  margin: 2rem 0;
`;

const TopicInput = styled(Input)`
  width: 305px;
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
