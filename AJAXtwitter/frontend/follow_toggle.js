const ApiUtil = require('./api_util');

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');

        this.render();
        this.handleClick = this.handleClick.bind(this);
        this.$el.on('click', this.handleClick);
    }

    handleClick(e) {
        e.preventDefault();
        
        if (this.followState === "unfollowed") {
            this.followState = "following";
            this.render();
            // $.ajax({
            //     url: `/users/${this.userId}/follow`,
            //     method: 'POST',
            //     dataType: 'json'
            // })
            ApiUtil.followUser(this.userId).then(() => {
                this.followState = 'followed';
                this.render();
            });
        } else if (this.followState === "followed") {
            this.followState = "unfollowing";
            this.render();
            // $.ajax({
            //     url: `/users/${this.userId}/follow`,
            //     method: 'delete',
            //     dataType: 'json'
            // })
            ApiUtil.unfollowUser(this.userId).then(() => {
                this.followState = 'unfollowed';
                this.render();
            });
        }
    }

    render() {
        if(this.followState === 'unfollowed') {
            this.$el.prop('disabled', false);
            this.$el.html('Follow!');
        } else if (this.followState === 'followed') {
            this.$el.prop('disabled', false);
            this.$el.html('Unfollow!');
        } else if (this.followState === "following") {
            this.$el.prop('disabled', true);
            this.$el.html('following');
        } else if (this.followState === "unfollowing") {
            this.$el.prop('disabled', true);
            this.$el.html('unfollowing');
        }
    }
}

module.exports = FollowToggle;