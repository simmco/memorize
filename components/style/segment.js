import styled from "styled-components";
import Link from "next/link";

export default props => (
  <Link href={{ pathname: "topics", query: { domains: props.topic } }}>
    <SegmentStyle>
      {props.topic}
    </SegmentStyle>
  </Link>
);

const SegmentStyle = styled.div`
    color: green;
    background-color: #fff;
    height: 60px;
    width: 180px;
    text-align: center;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
    transition: 0.1s ease-in;

    &:hover {
      background-color: green;
      color: #fff;
      transition: 0.2s ease-in;
    }

`;
