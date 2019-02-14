import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    store : service(),
    editMood : false,
    name : '',
    qty : '',
    price : '',
    // disabled : computed('name', 'qty', 'price', function () {

    // }),
    actions : {
        changeEditMood() {
            console.log(this.store)
            this.toggleProperty('editMood');
        },
        addNewShop() {
            let newProductRecord = this.store.createRecord('products', {
                name : this.get('name'),
                qty : this.get('qty'),
                price : this.get('qty')
            });
            newProductRecord.save().then(res => console.log(res));
        }
    }
});
