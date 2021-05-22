import styled from '@emotion/styled';
import { formElementsBase } from '../../styles/mixins';

const Button = styled.button`
    ${formElementsBase()}
    font-weight: bold;
    width: 100%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(125,60,152);
    background: linear-gradient(0deg, rgba(125,60,152,1) 0%, rgba(165,105,189,1) 100%);
    border: 0;
    padding: 0;
    left: 0;

    &:hover,
    &:focus {
        text-shadow: -1px -1px rgba(0, 0, 0, 0.2);
        background: rgba(165, 105, 189, 1);
        background: linear-gradient(0deg, rgba(165, 105, 189, 1) 0%, rgba(125, 60, 152, 1) 100%);
    }

    &[disabled] {
        left: 100%;
        opacity: 0;
    }

    > i {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -14px 0 0 -14px;
    }
`;

export default Button;