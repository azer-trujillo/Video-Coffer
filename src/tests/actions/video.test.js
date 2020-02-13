import * as videoSearch from '../../actions/videos';
//import * as user from '../user';

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(0);
  return videoSearch({ keywords: 'test', maxResults: 50, pageToken: '' }).then(data => expect(data).toEqual(
    {
                type:'FETCH_VIDEOS',
                'payload': false,
                fetched: false,
                error: null,
                nextPageToken: null,
                pageInfo: {
                    totalResults: 0,
                    resultsPerPage: 0,
                },
                items: []
            }  
    ));
});