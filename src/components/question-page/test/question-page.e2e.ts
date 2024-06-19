import { newE2EPage } from '@stencil/core/testing';

describe('question-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<question-page></question-page>');

    const element = await page.find('question-page');
    expect(element).toHaveClass('hydrated');
  });
});
