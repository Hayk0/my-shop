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
        addNewShop() {
            const newProductRecord = this.store.createRecord('product', {
                name : this.get('name'),
                qty : this.get('qty'),
                price : this.get('qty')
            });
            newProductRecord.save()
                .then(res => {
                    console.log(res)
                    this.toggleProperty('success');
                    this.toggleProperty('editMood');
                    this.set('name', '');
                    this.set('qty', '');
                    this.set('price', '');
                    setTimeout(() => this.toggleProperty('success'), 3000);
                })
                .catch(err => {
                    this.toggleProperty('error');
                    setTimeout(() => this.toggleProperty('error'), 3000);                                        
                });
        }
    }
});
