import TopicModal from "./topicModal";
import { Button, Modal, Dropdown } from "semantic-ui-react";
import styled from "styled-components";

export default class DomainSelect extends React.Component {
  state = {
    modalOpen: false
  };
  render() {
    return (
      <Container>
        <Text>Domain:</Text>
        <StyledDropdown
          placeholder="Select Domain"
          fluid
          search
          selection
          options={this.props.array}
          onChange={this.props.handleDomainSelect}
        />
        <Modal
          size="small"
          open={this.state.modalOpen}
          trigger={
            <Button onClick={() => this.setState({ modalOpen: true })}>
              Add Domain
            </Button>
          }
        >
          <TopicModal
            addNew={this.props.addNewDomain}
            type="Domain"
            closeModal={() => this.setState({ modalOpen: false })}
          />
        </Modal>
      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    height: 40px;
    margin: 2rem 0;
`;

const Text = styled.p`
  padding-top: 0.4rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledDropdown = styled(Dropdown)`
  max-width: 150px;
`;
