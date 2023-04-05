import styled from "styled-components";

export const Wrapper = styled.div`
    // border: 1px solid #0070A0;
    // box-shadow: 24px 12px 2px 1px #FAE173;
    padding: 18px;
    text-align: center;
`;

export const Title = styled.h1`
    color: #0070A0;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 18px;
`;

export const StatBlocks = styled.div`
    display: flex;
`;

export const StatItem = styled.div`
    border: 1px solid #0070A0;
    width: 166px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


    &:first-child {
        background-color: #a9f7b5;
    }

    &:nth-child(2) {
        background-color: #FAE173;
    }

    &:nth-child(3) {
        background-color: #F7CEDC;
    }

    &:nth-child(4) {
        background-color: #b1eefa;
    }

    &:last-child {
        background-color: #d8a5f7;
    }

    &:hover {
        transform: scale(1.05);
    }
`;


export const StatItemTitle = styled.div`
    margin-bottom: 12px; 
    font-size: 18px;
    font-weight: 600;
    color: #1F1F1F;
`;

export const StatIndicator = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: #0070A0;
`;
