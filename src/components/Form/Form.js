import React, { Component } from 'react';
import { FormData, FormLabel, FormLabelName, FormInputName } from './Form.styled';

class Form extends Component {
    render() {
        const { onSubmit, value, onChange } = this.props;
        return (
            <div>
                <FormData onSubmit={onSubmit}>
                    <FormLabel>
                        <FormLabelName>Name</FormLabelName>
                        <FormInputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={value} onChange={onChange}
                            />
                    </FormLabel>
                    <button type="submit">Add contact</button>
                </FormData>
            </div>
        )
    }
};

export default Form;