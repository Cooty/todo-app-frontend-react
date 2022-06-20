import styled from "@emotion/styled";
import { closeButtonSize, transition } from "./styles/variables";

const CustomCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &,
  > * {
    cursor: pointer;
  }

  > div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${closeButtonSize}px;
    height: ${closeButtonSize}px;
    border: 1px solid rgb(144, 148, 151);
    background: rgb(202, 207, 210);
    border-radius: 0.4rem;
    position: relative;

    > input[type="checkbox"] {
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 0;
    }

    > span {
      color: #239b56;
      font-size: 20px;
      transition: ${transition};
      transform-origin: center;
      opacity: 0;
      transform: scale(0);
    }

    > input[type="checkbox"]:checked + span {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default CustomCheckbox;
