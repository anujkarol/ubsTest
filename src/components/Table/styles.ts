import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

const ContainerWidthStyle = (width: any) => `${width.width}px`;

export const Container = styledComponentsTS<{ width: number }>(
  styledComponents.div
)`
  flex-shrink: 0;
  padding: 0 8px;
  width: ${(width) => ContainerWidthStyle(width)}
  text-align:left

`;
export const Wrapper = styledComponents.p`
line-height:20px;
word-break: break-word;
a{
  color:#000
}
`;

const RowContainerHeaderStyle = `
font-weight: 700;
`;
export const RowsContainer = styledComponentsTS<{ header: boolean }>(
  styledComponents.div
)`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
    padding:16px;
    font-size: 14px;
    border-bottom: 1px solid #c0c0c0;
    position: relative;
  ${({ header }) => header && RowContainerHeaderStyle}
`;

const TableContainerShiftStyle = `
margin-left:45px
`;
export const TableContainer = styledComponentsTS<{ isShift: boolean }>(
  styledComponents.div
)`
    box-shadow: 0 0px 4px 0 rgba(0,0,0,.05), 0 0 0 1px rgba(0,0,0,.05);
    background: #fff;
    ${({ isShift }) => isShift && TableContainerShiftStyle}

    a {
      text-decoration:underline;
    }
  `;

export const ErrorRow = styledComponents.div`
  text-align:center;
  padding:50px;
  width:100%;
  box-sizing:border-box
`;
