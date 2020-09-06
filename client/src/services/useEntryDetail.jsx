import { useState, useEffect } from 'react';

export default function useEntryDetail([title, body, createdOn, updatedOn]) {
  const [entryTitle, setTitle] = useState('');
  const [entryBody, setBody] = useState('');
  const [entryCreatedOn, setCreatedOn] = useState('');
  const [entryUpdatedOn, setUpdatedOn] = useState('');

  useEffect(() => {
    setTitle(title);
    setBody(body);
    setCreatedOn(createdOn);
    setUpdatedOn(updatedOn);
  });
  return {
    entryTitle, entryBody, entryCreatedOn, entryUpdatedOn,
  };
}
