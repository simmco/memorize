import TopicModal from "./topicModal";
import { Button, Modal, Dropdown } from "semantic-ui-react";
import styled from "styled-components";

export default props => (
  <Container>
    <Text>Category:</Text>
    <StyledDropdown
      placeholder="Select Category"
      fluid
      search
      selection
      disabled={props.fetching}
      options={props.array}
    />
    <Modal
      disabled={!props.domain}
      size="small"
      trigger={<Button>Add Category</Button>}
    >
      <TopicModal domain={props.domain} type="Category" />
    </Modal>
  </Container>
);

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
