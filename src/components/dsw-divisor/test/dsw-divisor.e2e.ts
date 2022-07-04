import { newE2EPage } from '@stencil/core/testing';

describe('dsw-divisor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-divisor></dsw-divisor>');

    const element = await page.find('dsw-divisor');
    expect(element).toHaveClass('hydrated');
  });
});
