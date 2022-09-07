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
    monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3OTA0OTkyMiwidWlkIjozMzYzOTI0MSwiaWFkIjoiMjAyMi0wOS0wNFQyMDo1NjoxMS42ODZaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTMyMDc5NjAsInJnbiI6InVzZTEifQ.nDshI6sML8ec88B5rpij2keF9gZT7ZD99so7PBp2Wkc');
    return monday.api(query).
    then(x =>  {let obj = {
        accountId:  x.account_id,
        accountName: x.data.me.account.name,
        userId: x.data.me.id,
        teamId: x.data.me.teams[0].id,
        teamName: x.data.me.teams[0].name
    }
    return obj;}
    );
};
