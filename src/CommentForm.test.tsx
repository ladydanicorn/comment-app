import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders correctly', () => {
    const { getByPlaceholderText, getByTestId } = render(<CommentForm />);
    expect(getByPlaceholderText('Title')).toBeInTheDocument();
    expect(getByPlaceholderText('Body')).toBeInTheDocument();
    expect(getByTestId('submit-btn')).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const { getByTestId } = render(<CommentForm />);
    const titleInput = getByTestId('title-input') as HTMLInputElement;
    const bodyInput = getByTestId('body-input') as HTMLTextAreaElement;

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(bodyInput, { target: { value: 'Test Body' } });

    expect(titleInput.value).toBe('Test Title');
    expect(bodyInput.value).toBe('Test Body');
  });

  it('submits the form and stores comment in localStorage', () => {
    const { getByTestId } = render(<CommentForm />);
    const titleInput = getByTestId('title-input');
    const bodyInput = getByTestId('body-input');
    const submitBtn = getByTestId('submit-btn');

    fireEvent.change(titleInput, { target: { value: 'Saved Title' } });
    fireEvent.change(bodyInput, { target: { value: 'Saved Body' } });
    fireEvent.click(submitBtn);

    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    expect(savedComments).toEqual([{ title: 'Saved Title', body: 'Saved Body' }]);
  });
});
