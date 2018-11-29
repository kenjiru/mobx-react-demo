import { inject } from 'mobx-react';
import React from 'react';
import { FunctionComponent } from 'react';
import { ConsumerInformationStore } from 'src/ConsumerInformationStore';

interface Props {
    consumerInformationStore?: ConsumerInformationStore;
}

export const GetDataButton: FunctionComponent<Props> = inject('consumerInformationStore')(
    ({ consumerInformationStore }) => (
        <button onClick={consumerInformationStore.getData}>Get Data</button>
    ),
);
