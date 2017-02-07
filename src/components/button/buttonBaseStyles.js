import { css } from 'styled-components';

const buttonBaseStyles = css`
  align-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  font-weight: 500;
  letter-spacing: 0;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  & > input {
    height: 0.1px;
    margin: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 0.1px;
    z-index: 0;
  }

  & > svg {
    display: inline-block;
    font-size: 120%
    vertical-align: top;
    width: 1em;
  }

  &[disabled] {
    color:inherit;
    cursor: auto;
    pointer-events: none;
  }
`;

export default buttonBaseStyles;
