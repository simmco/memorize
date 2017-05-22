import { Button, Header, Input, TextArea, Modal } from "semantic-ui-react";
import styled from "styled-components";

export default props => (
  <StyledModalContent>
    {console.log(props.domain)}
    <Modal.Header>
      Add {props.type} {props.domain && "to " + props.domain}
    </Modal.Header>
    <StyledModalDescription>
      <Header>Topic:</Header>
      <Input placeholder="Add the Topic..." />
      <Header>Description:</Header>
      <StyledTextarea />
    </StyledModalDescription>
    <StyledButton color="green">Save</StyledButton>
  </StyledModalContent>
);

const StyledModalContent = styled(Modal.Content)`
  padding: 2rem;
`;

const StyledModalDescription = styled(Modal.Description)`
  margin: 1rem 0;
`;

const StyledButton = styled(Button)`
  margin: 1rem 0 0 0 ;
`;

const StyledTextarea = styled(TextArea)`
  width: 100%;
  height: 80px;
  border-radius: .28571429rem;
  border: 1px solid rgba(34,36,38,.15);
  padding: 0.2rem;
`;
