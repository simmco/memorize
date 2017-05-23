import React from "react";
import { Button, Header, Input, TextArea, Modal } from "semantic-ui-react";
import styled from "styled-components";

class TopicModal extends React.Component {
  state = {
    topic: "",
    description: ""
  };
  handleSave = (topic, description, domain) => {
    this.props.addNew(topic, description, domain);
    this.props.closeModal();
  };
  render() {
    const { topic, description } = this.state;
    const { domain, addNew, type } = this.props;
    return (
      <StyledModalContent>
        <Modal.Header>
          Add {type}
        </Modal.Header>
        <StyledModalDescription>
          <Header>Topic:</Header>
          <Input
            onChange={e => this.setState({ topic: e.target.value })}
            value={topic}
            placeholder="Add the Topic..."
          />
          <Header>Description:</Header>
          <StyledTextarea
            onChange={e => this.setState({ description: e.target.value })}
            value={description}
          />
        </StyledModalDescription>
        <StyledButton
          onClick={() => this.handleSave(topic, description, domain)}
          color="green"
        >
          Save
        </StyledButton>
      </StyledModalContent>
    );
  }
}

export default TopicModal;

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
