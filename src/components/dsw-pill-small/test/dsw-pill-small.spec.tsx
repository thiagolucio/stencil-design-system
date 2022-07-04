import { newSpecPage } from '@stencil/core/testing';
import { DswPillSmall } from '../dsw-pill-small';

describe('dsw-pill-small', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswPillSmall],
      html: `<dsw-pill-small></dsw-pill-small>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-pill-small>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-pill-small>
    `);
  });
});
