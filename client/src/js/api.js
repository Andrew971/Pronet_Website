const {REACT_APP_API_URL,REACT_APP_DEV_API_URL,NODE_ENV,REACT_APP_STAGING_API_URL,REACT_APP_PROD_ENV} = process.env

const setUrl = (REACT_APP_PROD_ENV === 'true')
?REACT_APP_API_URL
:REACT_APP_STAGING_API_URL


export const serverURL =(NODE_ENV ==='production')
?setUrl+'storage/'
:REACT_APP_DEV_API_URL+'storage/'


export const apiURL =(NODE_ENV ==='production')
?setUrl+'api/'
:REACT_APP_DEV_API_URL+'api/'
