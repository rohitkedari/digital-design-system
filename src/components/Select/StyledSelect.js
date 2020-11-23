import styled, { css } from 'styled-components';
import { inputControlBorderStyle } from 'utils';

const getCss = (props) => {
    const { spaceSize, colors } = props.theme.global;
    const styles = [
        css`
            padding: ${spaceSize.xsmall};
            margin: ${spaceSize.xsmall};
            ${inputControlBorderStyle};
            &:hover {
                background-color: ${colors.bg_grey};
            }
        `,
    ];
    return styles;
};

const StyledSelect = styled.select`
    ${ (props) => getCss(props)}
`;

export { StyledSelect };