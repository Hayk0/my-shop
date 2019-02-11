import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {  name: 'ZARA' },
            {  name: 'MANGO' },
            {  name: 'MASSIMO DUTY' },
            {  name: 'VERNISAJ' },
        ];
      }
});
