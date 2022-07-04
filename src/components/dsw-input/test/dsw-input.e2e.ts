import { newE2EPage } from '@stencil/core/testing';

describe('dsw-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-input></dsw-input>');

    const element = await page.find('dsw-input');
    expect(element).toHaveClass('hydrated');
  });
});
