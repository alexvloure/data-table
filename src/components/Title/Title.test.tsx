import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import Title from './Title';
import renderWithProviders from '../../utils/renderWithProviders';
import { cleanup, screen } from '@testing-library/react';

beforeEach(() => {
  renderWithProviders(<Title title="test" />);
});

afterEach(() => {
  cleanup();
});

describe('Title', () => {
  it('should render', () => {
    const title = screen.getByText('test');
    expect(title).toBeInTheDocument();
  });
});
