import { helper } from '@ember/component/helper';
import errorParser from '../utils/error-parser';

export default helper(function fieldError([errors], hash) {
  return errorParser({ errors, type: hash.type });
});
