import { newSpecPage } from '@stencil/core/testing';
import { DswParagraph } from '../dsw-paragraph';

describe('dsw-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswParagraph],
      html: `<dsw-paragraph></dsw-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-paragraph>
    `);
  });
});
