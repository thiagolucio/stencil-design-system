import { newE2EPage } from '@stencil/core/testing';

describe('dsw-pill-small', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dsw-pill-small></dsw-pill-small>');

    const element = await page.find('dsw-pill-small');
    expect(element).toHaveClass('hydrated');
  });
});
