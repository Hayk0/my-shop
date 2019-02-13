import Controller from '@ember/controller';

export default Controller.extend({
    editMood : false,
    actions: {
        // createProduct() {
        //     let newProduct = this.get('store').createRecord('products', {
        //         name: this.newName,
        //         qty: this.qty,
        //         price: this.price,
        //         shop: this.model
        //     });
        //     newProduct.save()
        //     .then(() => {
        //         this.get('model.products').pushObject(newProduct);
        //         this.set('newName', '');
        //         this.set('qty', 0);
        //         this.set('price', 0);
        //         this.set('showForm', false)
        //     });
        // },
        changeEditMood() {
            this.toggleProperty('editMood');
        }
    }
});