import { newSpecPage } from '@stencil/core/testing';
import { DswIcon } from '../dsw-icon';

describe('dsw-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswIcon],
      html: `<dsw-icon></dsw-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-icon>
    `);
  });
});
