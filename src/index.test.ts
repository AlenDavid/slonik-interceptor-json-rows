import jsonInterceptor from ".";

type Case = [string, unknown, unknown];
const cases: Case[] = [
  ['simple', {a: 1, b: 2}, {a: 1, b: 2}],
  ['nested', {'a.a': 1, 'a.b': 2}, {a: {a: 1, b: 2 }}],
  ['object', {'a.b.c.d': 4}, {a: {b: {c: {d: 4}}}}],
  ['array', {'a[0]': 1, 'a[1]': 2}, {a: [1, 2]}],
  ['array-nested', {'a[0].a': 1, 'a[0].b': 2, 'a[1].a': 3, 'a[1].b': 4}, {a: [{a: 1, b: 2}, {a: 3, b: 4}]}],
  ['array-nested-array', {'a[0].a[0]': 1, 'a[0].a[1]': 2, 'a[1].a[0]': 3, 'a[1].a[1]': 4}, {a: [{a: [1, 2]}, {a: [3, 4]}]}],
];

let errors = 0;

for (const [name, input, expected] of cases) {
  // @ts-ignore
  const actual = jsonInterceptor.transformRow(undefined, undefined, input, undefined);
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.error(`${name}: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    errors++;
  }
}

process.exit(errors);
