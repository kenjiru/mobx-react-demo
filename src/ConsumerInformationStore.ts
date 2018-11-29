import { observable, action } from 'mobx';

export interface ConsumerInformation {
    firstName: string;
    lastName: string;
    age: number;
}

const URL = './data.json';

export class ConsumerInformationStore {
    @observable
    public data?: ConsumerInformation;

    @observable
    public isLoading?: boolean;

    @observable
    public error?: string;

    @action
    public getData = () => {
        this.isLoading = true;
        this.error = '';

        fetch(URL)
            .then(response => response.json())
            .then(this.handleSuccess)
            .catch(this.handleError);
    }

    @action
    private handleSuccess = (response: Response) => {
        this.data = convertResponseToData(response);
        this.isLoading = false;
    }

    @action
    private handleError = (error: Error) => {
        this.error = getErrorMessage(error);
        this.isLoading = false;
    }
}

function convertResponseToData(body: any): ConsumerInformation {
    return body as ConsumerInformation;
}

function getErrorMessage(error: Error): string {
    return error.message;
}

export const consumerInformationStore = new ConsumerInformationStore();