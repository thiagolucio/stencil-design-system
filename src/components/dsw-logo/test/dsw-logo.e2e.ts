import { newE2EPage } from '@stencil/core/testing';

describe('dsw-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-logo></dsw-logo>');

    const element = await page.find('dsw-logo');
    expect(element).toHaveClass('hydrated');
  });
});
