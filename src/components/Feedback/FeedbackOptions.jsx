
import PropTypes from 'prop-types';
import { ButtonsSet, ButtonsFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
            <ButtonsSet> {
                options.map(el => {
                    return (
                        <ButtonsFeedback
                            type="button"
                            onClick={() => onLeaveFeedback(el)}
                            key={el}
                        >
                            {el}
                        </ButtonsFeedback>
                    )
                })
            }  
            </ButtonsSet>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}



export default FeedbackOptions;