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
        addNewShop(model) {
            const self = this
            let newProduct = this.get('store').createRecord('product', {
                name: self.get('name'),
                qty: self.get('qty'),
                price: self.get('price'),
                shop: model
            });
            const currentShop = self.get('store').peekRecord('shop', model.id);
            currentShop.products.pushObject(self.store.createRecord('product', newProduct));
            newProduct.save()
                .then(() => {
                    // this.get('model.products').pushObject(newProduct);
                    
                    // console.log(this.get('model.products'))
                    // this.set('newName', '');
                    // this.set('qty', 0);
                    // this.set('price', 0);
                    // this.set('showForm', false)
                })
            // const self = this;
            // const currentShop = self.get('store').peekRecord('shop', shopId);
            // currentShop.products.pushObject(self.store.createRecord('product', {
            //     name: self.get('name'),
            //     qty: self.get('qty'),
            //     price: self.get('price'),
            // }))
            // currentShop.save(res => console.log(res.products.get('firstObject')) )

            console.log(model.id, model.name);
        }
    }
});
