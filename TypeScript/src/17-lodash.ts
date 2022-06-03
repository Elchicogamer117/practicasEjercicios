import _ from 'lodash';

const data = [
  {
    username: 'John',
    role: 'Spartan'
  },
  {
    username: 'Halsey',
    role: 'Scientific'
  },
  {
    username: 'John',
    role: 'Sergeant'
  },
  {
    username: 'Miranda Keys',
    role: 'Commander'
  },
  {
    username: 'Emile',
    role: 'Spartan'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
