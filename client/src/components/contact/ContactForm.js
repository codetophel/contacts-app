import React, { useContext, useEffect, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, clearCurrent, updateContact, current } = contactContext;
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [current, contactContext]);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  const { name, email, phone, type } = contact;
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        name='name'
        value={name}
        placeholder='Name'
        onChange={onChange}
      />
      <input
        type='email'
        name='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />
      <input
        type='text'
        name='phone'
        value={phone}
        placeholder='Phone'
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        onChange={onChange}
        checked={type === 'personal'}
      />{' '}
      Personal {'  '}
      <input
        type='radio'
        name='type'
        value='professional'
        onChange={onChange}
        checked={type === 'professional'}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
