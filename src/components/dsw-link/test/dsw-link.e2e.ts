import { newE2EPage } from '@stencil/core/testing';

describe('dsw-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-link></dsw-link>');

    const element = await page.find('dsw-link');
    expect(element).toHaveClass('hydrated');
  });
});
