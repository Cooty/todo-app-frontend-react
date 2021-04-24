import styled from '@emotion/styled';
import { formElementsBase } from '../../styles/mixins';

const Button = styled.button`
    ${formElementsBase()}
    font-weight: bold;
    height: 4.8rem;
    flex: 0 0 auto;
    color: #fff;
    cursor: pointer;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(125,60,152);
    background: linear-gradient(0deg, rgba(125,60,152,1) 0%, rgba(165,105,189,1) 100%);
    border: 0;

    &:not([disabled]):hover,
    &:not([disabled]):focus {
        text-shadow: -1px -1px rgba(0, 0, 0, 0.2);
        background: rgba(165, 105, 189, 1);
        background: linear-gradient(0deg, rgba(165, 105, 189, 1) 0%, rgba(125, 60, 152, 1) 100%);
    }

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
        background: rgba(202, 207, 210, 1);
        background: linear-gradient(0deg, rgba(144, 148, 151, 1) 0%, rgba(202, 207, 210, 1) 100%);
    }
`;

export default Button;