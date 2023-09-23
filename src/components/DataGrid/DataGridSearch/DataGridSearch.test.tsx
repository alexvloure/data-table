import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import renderWithProviders from '../../../utils/renderWithProviders';
import DataGridSearch from './DataGridSearch';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
  renderWithProviders(<DataGridSearch handleSearch={() => {}} />);
});

afterEach(() => {
  cleanup();
});

describe('DataGridSearch', () => {
  it('should render', () => {
    expect(document.querySelector('input')).toBeTruthy();
  });
  // it('should render chip when search button is clicked', async () => {
  //   const input = await screen.findByRole('textbox');
  //   const button = await screen.findByRole('button');
  //   userEvent.type(input, 'test');
  //   userEvent.click(button);
  // });
});
