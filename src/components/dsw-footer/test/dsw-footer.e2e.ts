import { newE2EPage } from '@stencil/core/testing';

describe('dsw-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-footer></dsw-footer>');

    const element = await page.find('dsw-footer');
    expect(element).toHaveClass('hydrated');
  });
});
