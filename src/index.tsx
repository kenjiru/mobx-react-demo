import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { FunctionComponent } from 'react';
import { userStore } from 'UserStore.ts';
import { UserListContainer } from 'src/UserListContainer.tsx';
import { GetDataButton } from 'src/GetDataButton';

const App: FunctionComponent = () => (
    <div>
        <div>Main App</div>
        <Provider userStore={userStore}>
            <>
                <UserListContainer />
                <GetDataButton />
            </>
        </Provider>
    </div>
);

ReactDOM.render(<App />, document.body);
