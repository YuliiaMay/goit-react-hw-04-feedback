import PropTypes from 'prop-types';
import { Wrapper, SectionTitle } from "./Section.styled";


const Section = ({title, children}) => {
    return (
        <Wrapper>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </Wrapper>
    )
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
}


export default Section;