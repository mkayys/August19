class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');

        this.render();
    }

    render() {
        if(this.followState === 'unfollowed') {
            this.$el.html('Follow!');
        } else if (this.followState === 'followed') {
            this.$el.html('Unfollow!');
        } else {
            this.$el.html('banana');
        }
    }
}

module.exports = FollowToggle;