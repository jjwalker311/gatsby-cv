import get from '.';

const SOME_KEY = 'some-key';
const DEFAULT = 'some-default';

describe('Suite of tests on get method', () => {
  it.each`
    object    | key    | expected
    ${null} | ${null} | ${null}
    ${{}} | ${undefined} | ${null}
    ${{}} | ${123} | ${null}
    ${{}} | ${{}}} | ${null}
    ${{}} | ${false} | ${null}
    ${{ a: 1 }} | ${'a'} | ${1}
    ${{ a: '1' }} | ${'a'} | ${'1'}
    ${{ a: false }} | ${'a'} | ${false}
    ${{ a: true }} | ${'a'} | ${true}
    ${{ a: { b: true } }} | ${'a.b'} | ${true}
    ${{ a: { 1: 123 } }} | ${'a.1'} | ${123}
    ${{ a: { b: { c: true } } }}| ${'a.b.c'} | ${true}
    ${{ a: { b: { c: { d: true } } } }}| ${'a.b.c.d'} | ${true}
    ${{ a: { [SOME_KEY]: true } }} | ${`a.${SOME_KEY}`} | ${true}
    
    `('For a key of $key, should return $expected', ({ object, key, expected }) => {
  expect(get(object, key)).toEqual(expected);
});


  it.each`
        object    | key    
        ${null} | ${null}
        ${{}} | ${undefined} 
        ${{}} | ${123} 
        ${{ a: 123 }} | ${'b'} 
        ${{ a: { b: 123 } }} | ${'a.z'} 
        
    `('For a key of $key, should return default value', ({ object, key }) => {
  expect(get(object, key, DEFAULT)).toEqual(DEFAULT);
});
});
