import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import CustomDataGrid from './CustomDataGrid';
import renderWithProviders from '../../utils/renderWithProviders';
import { cleanup, screen } from '@testing-library/react';

const mockData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
];

beforeEach(async () => {
  renderWithProviders(<CustomDataGrid rows={mockData} isLoading={false} />);
});

afterEach(() => {
  cleanup();
});

describe('DataGrid', () => {
  it('should render', async () => {
    const dataGrid = await screen.findByRole('grid');
    expect(dataGrid).toBeInTheDocument();
  });
  it('has 3 data rows', async () => {
    const rows = await (
      await screen.findAllByRole('row')
    ).filter((row) => row.getAttribute('data-rowindex') !== null);
    expect(rows.length).toBe(3);
  });
  it('has italic title on rows with id === prime number', async () => {
    // Check that row with id === 1 has normal font style on title
    const titleCol1 = await screen.findByText(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
    const styleTitleCol1 = window.getComputedStyle(titleCol1);
    expect(styleTitleCol1.fontStyle).toBe('normal');
    // Check that rows with id === 2 and 3 have italic font style on title
    const titleCol2 = await screen.findByText('qui est esse');
    const styleTitleCol2 = window.getComputedStyle(titleCol2);
    expect(styleTitleCol2.fontStyle).toBe('italic');
    const titleCol3 = await screen.findByText(
      'ea molestias quasi exercitationem repellat qui ipsa sit aut'
    );
    const styleTitleCol3 = window.getComputedStyle(titleCol3);
    expect(styleTitleCol3.fontStyle).toBe('italic');
  });
});
