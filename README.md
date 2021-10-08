


## Custom hook for data fetching
    -useFetch.js is custom hook for data fetch from backend. <br/>
    -It's reusual component just taking the api request url as a parameter. <br/>

## Tricky part
    - searching movie using title is optional OMDb API so it's little tricky to estimate if there is a such movie which its title is same as input. <br/>
    - I use reponse property to check if there is a movie that I am looking for. (App.js line 23). <br/>
## Todo
  -Remove search button by sending request  using debounce
