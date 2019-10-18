const ApiUtil = require('./api_util');

class UsersSearch {
    constructor(el) {
        this.$el = $(el);
        // debugger
        this.$input = this.$el.find('.search');
        this.$ul = this.$el.find('.users');

        this.handleInput = this.handleInput.bind(this);

        this.$input.on('input', this.handleInput);
    }

    handleInput(e) {
        e.preventDefault();
        let val = this.$input.val();
        ApiUtil.searchUsers(val).then((users) => {
            console.log(users);
        });

    }

};

module.exports = UsersSearch;