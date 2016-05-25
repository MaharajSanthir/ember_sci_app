import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'firstname'() {return faker.name.firstName();},
  'lastname'() {return faker.name.lastName();},
  'knownfor'() {return faker.name.jobDescriptor();}
});
