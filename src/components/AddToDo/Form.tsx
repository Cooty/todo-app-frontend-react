import styled from '@emotion/styled';
import { box, wrapper } from '../../styles/mixins';
import { vGutterFromScreen, breakpoints } from '../../styles/variables';

const Form = styled.form`
    padding-top: 3vh;
    padding-bottom: 3vh;
    flex-wrap: wrap;
    flex: 0 0 auto;
    flex-direction: column;
    ${box()}
    ${wrapper()}

    @media (min-width: ${breakpoints.sm}) {
        margin-top: ${vGutterFromScreen};
        padding-top: 6vh;
        padding-bottom: 6vh;
    }

    @media (max-width: ${parseInt(breakpoints.sm, 10) - 1 + 'px'}) {
        border-radius: 0;
        margin-right: 0;
        margin-left: 0;
    }
`;

export default Form;