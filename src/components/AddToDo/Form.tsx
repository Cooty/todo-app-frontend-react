import styled from '@emotion/styled';
import { box, wrapper } from '../../styles/mixins';
import {vGutterFromScreen} from "../../styles/variables";

const Form = styled.form`
    margin-top: ${vGutterFromScreen};
    padding-top: 6vh;
    padding-bottom: 6vh;
    flex-wrap: wrap;
    flex: 0 0 auto;
    ${box()}
    ${wrapper()}
`;

export default Form;