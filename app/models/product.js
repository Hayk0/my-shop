import DS from 'ember-data';
const {attr, belongsTo, Model} = DS;

export default Model.extend({
  name: attr('string'),
  qty: attr('number', { defaultValue: 0 }),
  price: attr('number', { defaultValue: 0 }),
  shop: belongsTo('shop'),
});
