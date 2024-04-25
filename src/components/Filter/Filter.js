import React, { Component } from 'react';
import { FilterTitle, FilterInput } from './Filter.styled';

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <div>
                <FilterTitle>Find contacts by name</FilterTitle>
                <FilterInput type="text" name="filter" value={value} onChange={onChange}></FilterInput>
            </div>
        )
    }
};

export default Filter;