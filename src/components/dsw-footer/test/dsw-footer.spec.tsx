import { newSpecPage } from '@stencil/core/testing';
import { DswFooter } from '../dsw-footer';

describe('dsw-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswFooter],
      html: `<dsw-footer></dsw-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-footer>
    `);
  });
});
