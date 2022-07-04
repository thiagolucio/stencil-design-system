import { newE2EPage } from '@stencil/core/testing';

describe('dsw-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-button></dsw-button>');

    const element = await page.find('dsw-button');
    expect(element).toHaveClass('hydrated');
  });
});
