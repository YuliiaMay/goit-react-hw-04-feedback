import React from "react";
import { Wrapper, Title, StatBlocks, StatItem, StatItemTitle, StatIndicator } from "./Statistics.styled";
import PropTypes from 'prop-types';

const Statistics = ({title, good, neutral, bad, total, positivePercentage}) => (
    <Wrapper>
        <Title>{title}</Title>

        <StatBlocks>
            <StatItem>
                <StatItemTitle>Good</StatItemTitle>
                <StatIndicator>{good}</StatIndicator>
            </StatItem>
            <StatItem>
                <StatItemTitle>Neutral</StatItemTitle>
                <StatIndicator>{neutral}</StatIndicator>
            </StatItem>
            <StatItem>
                <StatItemTitle>Bad</StatItemTitle>
                <StatIndicator>{bad}</StatIndicator>
            </StatItem>
            <StatItem>
                <StatItemTitle>Total</StatItemTitle>
                <StatIndicator>{total}</StatIndicator>
            </StatItem>   
            <StatItem>
                <StatItemTitle>Positive feedback</StatItemTitle>
                <StatIndicator>{positivePercentage}%</StatIndicator>
            </StatItem>            
        </StatBlocks>

    </Wrapper>
);


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}


export default Statistics;