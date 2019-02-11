import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';



module('Integration | Component | shop-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.shop = { name: 'test-name' };
  });
  test('should display shop details', async function(assert) {
    await render(hbs`{{shop-listing shop=shop}}`)
  });

  test('should toggle editMood variable on click', async function(assert) {
    await render(hbs`{{rental-listing rental=rental}}`);
  });
});
