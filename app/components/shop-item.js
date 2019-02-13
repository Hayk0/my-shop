import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import {observer} from '@ember/object';

export default Component.extend({
    editMood : false,
    name : '',
    // nameObs : observer('name', function () {
    //     console.log(this.get('name'))
    // }),
    disabled : equal('name', ''),
    actions : {
        changeEditMood() {
            this.toggleProperty('editMood');
        },
            
        saveChanges() {
            
        }
    }
});
