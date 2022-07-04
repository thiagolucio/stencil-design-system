import { newSpecPage } from '@stencil/core/testing';
import { DswSocialLogin } from '../dsw-social-login';

describe('dsw-social-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswSocialLogin],
      html: `<dsw-social-login></dsw-social-login>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-social-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-social-login>
    `);
  });
});
