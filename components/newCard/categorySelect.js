import TopicModal from "./topicModal";
import { Button, Modal, Dropdown } from "semantic-ui-react";
import styled from "styled-components";

export default class CategorySelect extends React.Component {
  state = {
    modalOpen: false
  };
  render() {
    const { domain, array, addNewCategory, handleCategorySelect } = this.props;
    return (
      <Container>
        <Text>Category:</Text>
        <StyledDropdown
          placeholder="Select Category"
          fluid
          search
          selection
          disabled={!domain}
          options={array}
          onChange={handleCategorySelect}
        />
        <Modal
          size="small"
          open={this.state.modalOpen}
          trigger={
            <Button
              onClick={() => this.setState({ modalOpen: true })}
              disabled={!domain}
            >
              Add Category
            </Button>
          }
        >
          <TopicModal
            domain={domain}
            type="Category"
            addNew={addNewCategory}
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
