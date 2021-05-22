import styled from '@emotion/styled';

interface CrossIconProps {
    size?: 'big' | 'small';
    rotated?: boolean;
};

const CrossIcon = (props: CrossIconProps) => {
    const size = props.size === 'big' ? '28px' : '10px';

    const StyledCrossIcon = styled.i`
        display: inline-block;
        width: ${size};
        height: ${size};
        color: inherit;
        transform-origin: center center;
        ${props.rotated ? 'transform: rotate(-225deg);' : ''}

        &:before,
        &:after {
            content: '';
            background: currentColor;
            position: absolute;
            transform-origin: center center;
        }

        &:after {
            width: 2px;
            height: 100%;
            left: 50%;
            margin-left: -1px;
        }

        &:before {
            width: 100%;
            height: 2px;
            left: 0;
            top: 50%;
            margin-top: -1px;
        }
    `;

    return <StyledCrossIcon />

}

export default CrossIcon;