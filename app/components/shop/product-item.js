import Component from '@ember/component';

export default Component.extend({
    editMood : false,
    name : '',
    qty : '',
    price : '',
    actions : {
        changeEditMood() {
            this.toogleProperty('editMood')
        }
    }
});
