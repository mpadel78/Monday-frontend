import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

export const getUserDetailsMAPI = async () => {
    const query = `query{
                        me {
                            id
                            account{
                                id
                                name
                            }
                            teams {
                                id
                                name
                            }
                        }
                    }`;
    //Need API key for testing locally, supposedly will work with logged in user data when deployed
    //monday.setToken('');
    return monday.api(query)
    .then(x =>  {let obj = {
        accountId:  x.account_id,
        accountName: x.data.me.account.name,
        userId: x.data.me.id,
        teamId: x.data.me.teams[0].id,
        teamName: x.data.me.teams[0].name
    }
    return obj;}
    );
};

export const getAllUsersNamesAndIds = async () => {
    const query = `query {
    users {
        name
            id
        account {
            name
            id
        }
    }
}`;
    //Need API key for testing locally, supposedly will work with logged in user data when deployed
    //monday.setToken('');

    return monday.api(query).then(x =>x.data.users);
};
