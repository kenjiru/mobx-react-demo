import { action, observable } from 'mobx';

export class User {
    @observable
    firstName?: string;

    @observable
    lastName?: string;

    @observable
    age?: number;

    @observable
    isLoading?: boolean;

    @observable
    error?: string;

    constructor({ firstName, lastName, age }: { firstName: string, lastName: string, age: number }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    @action
    public increaseAge = () => {
        this.isLoading = true;

        setTimeout(() => {
            this.increaseAgeSuccess();
        }, 1000);
    }

    @action
    private increaseAgeSuccess = () => {
        this.age = this.age! + 1;
        this.isLoading = false;
    }
}
