import { newSpecPage } from '@stencil/core/testing';
import { DswSubtitle } from '../dsw-subtitle';

describe('dsw-subtitle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswSubtitle],
      html: `<dsw-subtitle></dsw-subtitle>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-subtitle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-subtitle>
    `);
  });
});
