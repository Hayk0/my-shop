import DS from 'ember-data';
import { computed } from '@ember/object';


export default DS.Model.extend({
    name: DS.attr('string'),
    qty: DS.attr('number', {defaultValue: 0}),
    price: DS.attr('number', {defaultValue: 0}),
    shop: DS.belongsTo('shop'),
    total: computed('price', 'qty', function() {
        return this.price * this.qty;
    })
});
