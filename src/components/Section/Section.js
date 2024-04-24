import React, { Component } from 'react';
import { FeedbackTitle } from './Section.styled';

class Section extends Component {
   
    render() {
        const { title, children } = this.props;
        return (
            <section>
                <FeedbackTitle>{title}</FeedbackTitle>
                {children}
            </section>
		);
	}
};

export default Section;