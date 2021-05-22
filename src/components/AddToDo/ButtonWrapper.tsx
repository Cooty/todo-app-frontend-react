import styled from '@emotion/styled';
import { formHeight } from '../../styles/variables';

const offset = '6px';
const size = `${formHeight} - ${parseInt(offset, 10) * 2 + 'px'}`;

const ButtonWrapper = styled.div`
    position: absolute;
    right: ${offset};
    top: ${offset};
    width: calc(${size});
    height: calc(${size});
    overflow: hidden;
`;

export default ButtonWrapper;