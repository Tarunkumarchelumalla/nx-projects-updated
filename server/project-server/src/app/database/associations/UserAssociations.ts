import { GameTable } from "../tables/masters/Games";
import { UserLinkGameTable } from "../tables/users/UserLinkGameTable";
import { UserTable } from "../tables/users/UserTable";

export class UserAssociations{

    constructor(){
        
        UserTable.hasMany(UserLinkGameTable,{
            foreignKey:'UID',
            sourceKey:'UID',
            as:'games'
        })

        UserLinkGameTable.belongsTo(UserTable,{
            foreignKey:'UID',
            as:'games'
        })

        UserLinkGameTable.hasMany(GameTable,{
            foreignKey:'GID',
            sourceKey:'GID',
            as:'sourceGameData'
        })

        GameTable.belongsTo(UserLinkGameTable,{
            foreignKey:'GID',
            as:'sourceGameData'
        })

    }

}