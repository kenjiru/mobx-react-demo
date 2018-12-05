import { observer } from 'mobx-react';
import React, { FunctionComponent } from 'react';
import { User } from 'src/User';
import { UserItem } from 'src/UserItem';

interface Props {
    users: User[];
}

export const UserList: FunctionComponent<Props> = observer(({ users }) => (
    <div className="user-list">
        {renderUsers(users)}
    </div>
));

function renderUsers(users: User[]) {
    return users.map((user: User, index: number) => (
        <UserItem
            key={index}
            user={user}
        />
    ))
}
