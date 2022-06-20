import styled from "@emotion/styled";
import { vGutterFromScreen } from "../../styles/variables";
import { box, wrapper } from "../../styles/mixins";
import { breakpoints, boxPadding } from "../../styles/variables";

const List = styled.ul`
  flex-direction: column;
  padding-top: ${boxPadding};
  padding-bottom: ${boxPadding};
  margin-bottom: ${vGutterFromScreen};
  overflow: auto;
  ${box()}
  ${wrapper()}

    @media (max-width: ${parseInt(breakpoints.sm, 10) - 1 + "px"}) {
    margin: 0;
    border-radius: 0;
  }
`;

export default List;
