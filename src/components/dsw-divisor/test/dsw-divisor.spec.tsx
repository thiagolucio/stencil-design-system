import { newSpecPage } from '@stencil/core/testing';
import { DswDivisor } from '../dsw-divisor';

describe('dsw-divisor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswDivisor],
      html: `<dsw-divisor></dsw-divisor>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-divisor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-divisor>
    `);
  });
});
