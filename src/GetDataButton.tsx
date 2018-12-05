import { inject } from 'mobx-react';
import React from 'react';
import { FunctionComponent } from 'react';
import { UserStore } from 'UserStore.ts';

interface Props {
    userStore?: UserStore;
}

export const GetDataButton: FunctionComponent<Props> = inject('userStore')(
    ({ userStore }) => (
        <button onClick={userStore.getData}>Get Data</button>
    ),
);
