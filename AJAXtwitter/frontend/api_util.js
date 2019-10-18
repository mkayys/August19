const APIUtil = {
    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: 'POST',
            dataType: 'json'
        });
    },

    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            method: 'delete',
            dataType: 'json'
        });
    },

    searchUsers: queryVal => {
        // debugger
        return $.ajax({
            url: '/users/search',
            method: 'get',
            dataType: 'json',
            data: { query: queryVal }
        });
    }
};

module.exports = APIUtil;