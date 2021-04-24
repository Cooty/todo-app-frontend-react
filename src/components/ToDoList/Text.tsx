import styled from '@emotion/styled';
import { textGutter } from "./styles/variables";

const Text = styled.span`
    display: inline-block;
    font-size: 1.6rem;
    padding: 5px 0 0 ${textGutter}px;
    ${(props: {isDone: boolean}) => props.isDone ? 'text-decoration: line-through' : '' }
`;

export default Text;