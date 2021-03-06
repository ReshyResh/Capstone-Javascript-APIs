/* eslint no-unused-vars:0 */
import _ from 'lodash'; /* eslint-disable-line */
import '../style.css';

import call from './getData';
import populate from './populate';
import toGet from './toGet';

document.addEventListener('DOMContentLoaded', async () => {
  populate(await call(), toGet); // Call for the remote API
});
