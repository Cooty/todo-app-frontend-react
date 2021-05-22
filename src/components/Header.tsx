import styled from "@emotion/styled";
import { wrapper } from "../styles/mixins";
import { breakpoints, boxPadding } from "../styles/variables";

const Header = styled.h1`
  font-size: 2.6rem;
  margin: 4vh 0 2vh 0;
  flex: 0 0 auto;
  ${wrapper()}

  @media (max-width: ${parseInt(breakpoints.sm, 10) - 1 + 'px'}) {
    margin-right: 0;
    margin-left: 0;
    padding-left: ${boxPadding};
    padding-right: ${boxPadding};
  }

`;

export default Header;