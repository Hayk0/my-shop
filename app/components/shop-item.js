import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import {observer} from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    editMood: false,
    name: '',
    disabled: equal('name', ''),
    success: false,
    successMessage: 'Shop was updated successfully!',
    error: false,
    errorMessage: 'Error, try again!',
    actions: {
        changeEditMood() {
            this.toggleProperty('editMood');
        },
            
        editShop(id) {
            const self = this;
            const shop = self.get('store').findRecord('shop', id)
                .then(res => {
                    self.toggleProperty('success');
                    res.setProperties({
                        name: self.get('name'),
                        qty: self.get('qty'),
                        price: self.get('price')
                    });
                    self.set('name', ''),
                    setTimeout(() => self.toggleProperty('success'), 3000);
                    self.toggleProperty('editMood');
                })
                .catch(err => {
                    const self = this;
                    self.toggleProperty('error');
                    setTimeout(() => self.toggleProperty('error'), 3000);
                });            
        }
    }
});
