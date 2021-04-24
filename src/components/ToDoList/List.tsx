import styled from '@emotion/styled';
import {vGutterFromScreen} from "../../styles/variables";
import {box, wrapper} from "../../styles/mixins";
import {vGutter} from "./styles/variables";

const List = styled.ul`
    flex-direction: column;
    flex: 1;
    padding-top: ${vGutter};
    padding-bottom: ${vGutter};
    margin-bottom: ${vGutterFromScreen};
    overflow: auto;
    ${box()}
    ${wrapper()}
`;

export default List;