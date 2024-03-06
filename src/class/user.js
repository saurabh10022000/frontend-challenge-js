import convertNumber from '../utils/convertNumber';

export class User {
  name = '';

  income = NaN;

  education = '';

  constructor(params) {
    this.name = params ? params.name ? params.name : '' : '';
    this.income = params && params.income !== undefined ? (params.income === '0' ? 0 : convertNumber(params.income)) : NaN;
    // this.income = params ? params.income ? convertNumber(params.income) : 0 : 0;
    this.education = params ? params.education : '';
  }
}
