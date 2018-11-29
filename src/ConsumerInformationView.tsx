import { observer, inject } from 'mobx-react';
import React from 'react';
import { Component } from 'react';
import { ConsumerInformationStore } from 'src/ConsumerInformationStore';

interface Props {
    consumerInformationStore?: ConsumerInformationStore;
}

@inject('consumerInformationStore')
@observer
export class ConsumerInformationView extends Component<Props> {
    public render() {
        const { consumerInformationStore } = this.props;

        if (consumerInformationStore === undefined) {
            return <div>No store</div>;
        }

        if (consumerInformationStore.isLoading) {
            return <div>Loading...</div>;
        }

        if (consumerInformationStore.error) {
            return <div>Error: {consumerInformationStore.error}</div>;
        }

        const { data } = consumerInformationStore;

        if (data === undefined) {
            return null;
        }

        return (
            <div>
                <div>Full Name: {data.firstName} {data.lastName}</div>
                <div>Age: {data.age}</div>
            </div>
        );
    }
}
