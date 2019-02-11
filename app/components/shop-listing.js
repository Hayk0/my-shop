import Component from '@ember/component';

export default Component.extend({
    editMood : false,
    actions : {
        changeEditMood() {
            this.toggleProperty('editMood');
        }
    }
});
