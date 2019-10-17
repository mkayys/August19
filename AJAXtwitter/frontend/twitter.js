const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(()=> {
    const $toggleBtn = $('.follow-toggle');
    $toggleBtn.each((idx, btn) => {
        new FollowToggle(btn);
    });

    const $searchNav = $('.users-search');
    $searchNav.each((idx, nav) => {
        new UsersSearch(nav);
    });
})