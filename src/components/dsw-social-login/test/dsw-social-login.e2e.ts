import { newE2EPage } from '@stencil/core/testing';

describe('dsw-social-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-social-login></dsw-social-login>');

    const element = await page.find('dsw-social-login');
    expect(element).toHaveClass('hydrated');
  });
});
