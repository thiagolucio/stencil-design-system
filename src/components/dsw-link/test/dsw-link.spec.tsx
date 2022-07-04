import { newSpecPage } from '@stencil/core/testing';
import { DswLink } from '../dsw-link';

describe('dsw-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswLink],
      html: `<dsw-link></dsw-link>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-link>
    `);
  });
});
