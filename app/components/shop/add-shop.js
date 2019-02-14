import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
    store : service(),
    editMood : false,
    name : '',
    disabled : equal('name', ''),
    successMessage : 'Shop was added successfully!',
    success : false,
    errorMessage : 'Error, try again!',
    error : false,
    actions : {
        changeEditMood() {
            this.toggleProperty('editMood');
        },
        addNewShop() {
            const newShopRecord = this.get('store').createRecord('shop', {name : this.get('name')});
            newShopRecord.save()
                .then(res => {
                    this.set('name', '');
                    this.toggleProperty('success');
                    this.toggleProperty('editMood');
                    setTimeout(() => this.toggleProperty('success'), 3000);
                })
                .catch(e => {
                    this.toggleProperty('error');
                    setTimeout(() => this.toggleProperty('error'), 3000);
                });
        }
    }
});
