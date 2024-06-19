import { newSpecPage } from '@stencil/core/testing';
import { QuestionPage } from '../question-page';

describe('question-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuestionPage],
      html: `<question-page></question-page>`,
    });
    expect(page.root).toEqualHtml(`
      <question-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </question-page>
    `);
  });
});
