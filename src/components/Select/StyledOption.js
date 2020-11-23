import styled, { css } from 'styled-components';

const getCss = (props) => {
    const { colors } = props.theme.global;
    const styles = [
        css`
            background-color: ${colors.bg_grey};
            &:hover {
                background-color: ${colors.bg_black};
            }
        `,
    ];
    return styles;
};

const StyledOption = styled.option`
    ${ (props) => getCss(props)}
`;

export { StyledOption };