import { newE2EPage } from '@stencil/core/testing';

describe('dsw-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-icon></dsw-icon>');

    const element = await page.find('dsw-icon');
    expect(element).toHaveClass('hydrated');
  });
});
