import DS from 'ember-data';
import { computed } from '@ember/object';


export default DS.Model.extend({
    name: DS.attr('string'),
    products: DS.hasMany('product'),
    totalPrice: computed('products.@each.{price,qty}', function () {
        let products = this.get('products');
        return products.reduce(function(previousValue, product){
            return previousValue + (product.get('price') * product.get('qty'));
        }, 0);
    })
});
