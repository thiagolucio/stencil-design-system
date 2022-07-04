import { newE2EPage } from '@stencil/core/testing';

describe('dsw-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-paragraph></dsw-paragraph>');

    const element = await page.find('dsw-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
