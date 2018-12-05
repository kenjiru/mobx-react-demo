import { observer, inject } from 'mobx-react';
import React from 'react';
import { Component } from 'react';
import { UserList } from 'src/UserList';
import { UserStore } from 'UserStore.ts';

interface Props {
    userStore?: UserStore;
}

@inject('userStore')
@observer
export class UserListContainer extends Component<Props> {
    public render() {
        const { userStore } = this.props;

        if (userStore === undefined) {
            return <div>No store</div>;
        }

        if (userStore.isLoading) {
            return <div>Loading...</div>;
        }

        if (userStore.error) {
            return <div>Error: {userStore.error}</div>;
        }

        if (userStore.users === undefined) {
            return null;
        }

        console.log('UserListContainer render');

        return (
            <UserList
                users={userStore.users}
            />
        );
    }
}
