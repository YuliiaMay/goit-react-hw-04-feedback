import styled from "styled-components";

export const ButtonsSet = styled.div`
    display: flex;
    gap: 32px;

`;

export const ButtonsFeedback = styled.button`
    border: 2px solid #0070A0;
    border-radius: 4px;
    background-color: transparant;
    width: 100px;
    height: 50px;
    font-size: 18px;
    cursor: grab;
    /*  властивості переходу  */
    transition-property: border, background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        border: 2px solid #fff;
        color: #006B99;
        box-shadow: 8px 4px 1px 1px #0070A0;
    }

    &:first-child:hover,
    &:first-child:focus {
        background-color: #a9f7b5;
    }

    &:nth-child(2):hover,
    &:nth-child(2):focus {
        background-color: #FAE173;
    }

    &:nth-child(3):hover,
    &:nth-child(3):focus {
        background-color: #F7CEDC;
    }
`;

