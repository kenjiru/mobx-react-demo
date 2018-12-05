import { observable, action, IObservableArray } from 'mobx';
import { User } from 'src/User';

const URL = './data.json';

export class UserStore {
    @observable
    public users: User[] = [];

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
            .then(this.getDataSuccess)
            .catch(this.getDataError);
    }

    @action
    private getDataSuccess = (response: any) => {
        this.isLoading = false;
        this.users = convertResponseToData(response);
    }

    @action
    private getDataError = (error: Error) => {
        this.error = getErrorMessage(error);
        this.isLoading = false;
    }

    @action
    public removeUser = (user: User) => {
        (this.users as IObservableArray).remove(user);
    }
}

function convertResponseToData(userObjects: any[]): User[] {
    return userObjects.map(userObject => new User(userObject));
}

function getErrorMessage(error: Error): string {
    return error.message;
}

export const userStore = new UserStore();