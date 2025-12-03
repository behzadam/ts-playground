import { type Assert, type Equal, type Not } from 'asserttt';

/**
 * Keep it as an example of the usage of the asserttt library.
 */

type Pair<X> = [X, X];
type _ = [
  Assert<Equal<
    Pair<'a'>, ['a', 'a']
  >>,
  Assert<Not<Equal<
    Pair<'a'>, ['x', 'z']
  >>>,
];