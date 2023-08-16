import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Form, Input, Button } from './Search.styled';

const Search = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = value.trim();

    if (searchValue === '') {
      toast.warn(
        'The search field is empty. Please enter your data for query.'
      );
      return;
    }

    onSubmit(searchValue);
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">        
        <ImSearch size={24} />
      </Button>
    </Form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
