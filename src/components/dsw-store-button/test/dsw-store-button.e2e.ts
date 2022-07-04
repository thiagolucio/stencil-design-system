import { newE2EPage } from '@stencil/core/testing';

describe('dsw-store-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-store-button></dsw-store-button>');

    const element = await page.find('dsw-store-button');
    expect(element).toHaveClass('hydrated');
  });
});
