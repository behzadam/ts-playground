import { type Assert, type Equal, type Not } from 'asserttt';

type Pair<X> = [X, X];
type _ = [
  Assert<Equal<
    Pair<'a'>, ['a', 'a']
  >>,
  Assert<Not<Equal<
    Pair<'a'>, ['x', 'x']
  >>>,
];