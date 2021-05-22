import styled from '@emotion/styled';
import { closeButtonSize, transition } from "./styles/variables";

export const innerBorder = '0 0 0 1px rgba(0, 0, 0, .4) inset';

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    border: 0;
    padding: 0;
    width: ${closeButtonSize}px;
    height: ${closeButtonSize}px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #F9EBEA;
    background-color: #B03A2E;
    border-radius: 100%;
    box-shadow: ${innerBorder};
    cursor: pointer;
    transition: ${transition};
    
    &:focus,
    &:hover {
        outline: 0;
        box-shadow: ${innerBorder}, 0 0 6px rgb(146, 43, 33, .6);
    }
    
`;

export default CloseButton;