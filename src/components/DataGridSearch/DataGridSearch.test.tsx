import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import renderWithProviders from '../../utils/renderWithProviders';
import DataGridSearch from './DataGridSearch';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  renderWithProviders(<DataGridSearch handleSearch={() => {}} />);
});

afterEach(() => {
  cleanup();
});

describe('DataGridSearch', () => {
  it('should render', () => {
    const input = screen.getByLabelText('Search by title');
    expect(input).toBeInTheDocument();
  });
  it('should render chip when search button is clicked and input is not empty', async () => {
    const input = (await screen.findByLabelText(
      'Search by title'
    )) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test');
    expect(input.value).toBe('test');
    const button = await screen.findByText('search');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const chip = await screen.findByTestId('chipSearch');
    expect(chip).toBeInTheDocument();
  });
  it('should remove chip when delete button is clicked', async () => {
    const input = (await screen.findByLabelText(
      'Search by title'
    )) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'test');
    const button = await screen.findByText('search');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const chip = await screen.findByTestId('chipSearch');
    expect(chip).toBeInTheDocument();
    const deleteButton = await screen.findByTestId('CancelIcon');
    await userEvent.click(deleteButton);
    expect(chip).not.toBeInTheDocument();
  });
  it('should not render chip when search button is clicked and input is empty', async () => {
    const input = (await screen.findByLabelText(
      'Search by title'
    )) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    const button = await screen.findByText('search');
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const chip = screen.queryByTestId('chipSearch');
    expect(chip).not.toBeInTheDocument();
  });
});
