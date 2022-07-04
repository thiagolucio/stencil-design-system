import { newSpecPage } from '@stencil/core/testing';
import { DswHeading } from '../dsw-heading';

describe('dsw-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswHeading],
      html: `<dsw-heading></dsw-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-heading>
    `);
  });
});
