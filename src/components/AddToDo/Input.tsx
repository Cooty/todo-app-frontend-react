import styled from '@emotion/styled';
import { formElementsBase } from '../../styles/mixins';
import { formHeight } from '../../styles/variables';

const Input = styled.input`
    ${formElementsBase()}
    width: 100%;
    height: 100%;
    background: #fff;
    color: inherit;
    border: 2px solid rgba(165, 105, 189, 1);
    font-size: 1.8rem;
    padding: 0.6rem ${formHeight} 0.6rem 1.6rem;

    &:hover,
    &:focus {
        border-color: rgb(125, 60, 152);
        box-shadow: 0 0 0.4rem rgba(165, 105, 189, 1);
    }

`;

export default Input;