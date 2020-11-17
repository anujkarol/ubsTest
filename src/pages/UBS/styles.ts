import styledComponents from "styled-components";

export const ButtonWrapper = styledComponents.div`
    display:flex;
    justify-content:center;
    min-height:100px;
    align-items: center;
`;
ButtonWrapper.displayName = "ButtonWrapper";

export const Button = styledComponents.button`
    font-size: 1rem;
    background-color: rgb(255, 62, 62);
    color: rgb(255, 255, 255);
    font-family: inherit;
    font-weight: 600;
    height: 48px;
    border-radius: 4px;
    border-style: none;
    outline: none;
    padding: 12px 16px;
`;

export const Wrapper = styledComponents.div`
    display:flex;
    width: 1200px;
    margin: 0 auto;
    flex-direction:column;
`;
Wrapper.displayName = "Wrapper";
