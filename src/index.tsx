import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { FunctionComponent } from 'react';
import { consumerInformationStore } from 'src/ConsumerInformationStore';
import { ConsumerInformationView } from 'src/ConsumerInformationView';
import { GetDataButton } from 'src/GetDataButton';

const App: FunctionComponent = () => (
    <div>
        <div>Main App</div>
        <Provider consumerInformationStore={consumerInformationStore}>
            <>
                <ConsumerInformationView />
                <GetDataButton />
            </>
        </Provider>
    </div>
);

ReactDOM.render(<App />, document.body);
