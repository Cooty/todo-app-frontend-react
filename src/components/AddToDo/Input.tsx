import styled from '@emotion/styled';
import { formElementsBase } from '../../styles/mixins';

const Input = styled.input`
    ${formElementsBase()}
    flex: 1;
    margin-right: 1.6rem;
    background: #fff;
    color: inherit;
    border: 2px solid rgba(165, 105, 189, 1);
    font-size: 1.8rem;

    &:hover,
    &:focus {
        border-color: rgb(125, 60, 152);
        box-shadow: 0 0 0.4rem rgba(165, 105, 189, 1);
    }

`;

export default Input;