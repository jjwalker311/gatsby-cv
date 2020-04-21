import parseQueryString from '.';

describe('Suite of tests on parseQueryString', () => {
  it.each`
    queryString    | expected   
    ${null} | ${{}} 
    ${''} | ${{}}
    ${'SOME_INVALID_QUERY'} | ${{}}
    ${'?SOME_INVALID_QUERY'} | ${{}}
    ${'?aaa=111'} | ${{ aaa: '111' }}
    ${'?aaa=111&bbb=222&ccc=333'} | ${{ aaa: '111', bbb: '222', ccc: '333' }}
    
    
`('$queryString should return $expected', ({ queryString, expected }) => {
  expect(parseQueryString(queryString)).toMatchObject(expected);
});
});
