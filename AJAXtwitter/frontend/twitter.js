const FollowToggle = require('./follow_toggle');

$(()=> {
    const $toggleBtn = $('.follow-toggle');
    $toggleBtn.each((idx, btn) => {
        new FollowToggle(btn);
    });
})