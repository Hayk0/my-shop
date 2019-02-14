import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
    store : service(),
    editMood : false,
    name : '',
    disabled : equal('name', ''),
    actions : {
        changeEditMood() {
            this.toggleProperty('editMood');
        },
        addNewShop() {
            let newShopRecord = this.store.createRecord('shop', {name : this.get('name')});
            newShopRecord.save()
                .then(res => console.log(res))
                .catch(e => console.log(e));
        }
    }
});
