import styled from '@emotion/styled';
import { vGutter, textGutter, closeButtonSize } from "./styles/variables";

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    padding-bottom: ${vGutter};
    padding-right: ${closeButtonSize + textGutter}px;
    margin-bottom: ${vGutter};
    
    &:last-of-type {
        margin-bottom: 0;
        border-bottom: 0;
        padding-bottom: 0;
    }
`;

export default ListItem;