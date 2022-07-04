import { newE2EPage } from '@stencil/core/testing';

describe('dsw-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-heading></dsw-heading>');

    const element = await page.find('dsw-heading');
    expect(element).toHaveClass('hydrated');
  });
});
