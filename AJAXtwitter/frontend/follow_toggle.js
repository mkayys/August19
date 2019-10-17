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
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: 'POST',
                dataType: 'json'
            }).then(() => {
                this.followState = 'followed';
                this.render();
            });
        } else if (this.followState === "followed") {
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: 'delete',
                dataType: 'json'
            }).then(() => {
                this.followState = 'unfollowed';
                this.render();
            });
        }
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