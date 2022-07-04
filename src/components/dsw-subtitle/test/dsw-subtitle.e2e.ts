import { newE2EPage } from '@stencil/core/testing';

describe('dsw-subtitle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-subtitle></dsw-subtitle>');

    const element = await page.find('dsw-subtitle');
    expect(element).toHaveClass('hydrated');
  });
});
