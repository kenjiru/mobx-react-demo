import { inject, observer } from 'mobx-react';
import React, { FunctionComponent } from 'react';
import { User } from 'src/User';
import { UserStore } from 'src/UserStore';

interface Props {
    userStore?: UserStore;
    user: User;
}

export const UserItem: FunctionComponent<Props> = inject('userStore')(observer(
    ({ userStore, user }) => {
        if (user.isLoading) {
            return <div>Updating {user.firstName}</div>;
        }

        console.log('UserItem render');

        return (
            <div className="user-item">
                <div>First name: {user.firstName}</div>
                <div>Last name: {user.lastName}</div>
                <div>Age: {user.age}</div>
                <button onClick={() => user.increaseAge()}>Increase age</button>
                <button onClick={() => userStore.removeUser(user)}>Remove user</button>
            </div>
        );
    },
));
