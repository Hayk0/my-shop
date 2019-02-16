import Component from '@ember/component';
import { empty } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
    store : service(),
    editMood : false,
    name : '',
    qty : '',
    price : '',
    disabled :  empty('name') && empty('qty') && empty('price'),
    success : false,
    successMessage : 'Product was added successfully!',
    error: false,
    errorMessage: 'Error, try again!',
    actions : {
        changeEditMood() {
            this.toggleProperty('editMood');
        },
        addNewShop(shopId) {
            const self = this;
            const currentShop = self.get('store').peekRecord('shop', shopId);
            currentShop.products.pushObject(self.store.createRecord('product', {
                name: self.get('name'),
                qty: self.get('qty'),
                price: self.get('price'),
            }))
            // currentShop.save(res => console.log(res.products.get('firstObject')) )

            console.log(currentShop.products)
        }
    }
});
