import TopicModal from "./topicModal";
import { Button, Modal, Dropdown } from "semantic-ui-react";
import styled from "styled-components";

export default props => (
  <Container>
    <Text>Domain:</Text>
    <StyledDropdown
      placeholder="Select Domain"
      fluid
      search
      selection
      options={props.array}
      onChange={props.handleDomainSelect}
    />
    <Modal size="small" trigger={<Button>Add Domain</Button>}>
      <TopicModal type="Domain" />
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
