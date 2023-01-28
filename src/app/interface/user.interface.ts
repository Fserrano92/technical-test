export interface IUser {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  cellPhone: string;
  homePhone: string;
  addressHome: string;
  profession: string;
  incomes: string;
}

export class UserBuilder {
  private readonly _user!: IUser;

  constructor() {
    this._user = {
      firstName: 'unknown',
      lastName: 'unknown',
      birthday: 'unknown',
      gender: 'unknown',
      cellPhone: 'unknown',
      homePhone: 'unknown',
      addressHome: 'unknown',
      profession: 'unknown',
      incomes: 'unknown',
    };
  }

  firstName(firstName: string): UserBuilder {
    this._user.firstName = firstName;
    return this;
  }

  lastName(lastName: string): UserBuilder {
    this._user.lastName = lastName;
    return this;
  }

  birthday(birthday: string): UserBuilder {
    this._user.birthday = birthday;
    return this;
  }

  gender(gender: string): UserBuilder {
    this._user.gender = gender;
    return this;
  }

  cellPhone(cellPhone: string): UserBuilder {
    this._user.cellPhone = cellPhone;
    return this;
  }

  homePhone(homePhone: string): UserBuilder {
    this._user.homePhone = homePhone;
    return this;
  }

  addressHome(addressHome: string): UserBuilder {
    this._user.addressHome = addressHome;
    return this;
  }

  profession(profession: string): UserBuilder {
    this._user.profession = profession;
    return this;
  }

  incomes(incomes: string): UserBuilder {
    this._user.incomes = incomes;
    return this;
  }

  build(): IUser {
    return this._user;
  }
}
