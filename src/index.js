
export { default as tableReducers } from './modules/index';

export { default as Table } from './containers/TableContainer';


//TODO
//TODO
//TODO 1) sorting
//TODO 2) data retrieval
//TODO   xa) inline sort of api middleware (takes a url)
//TODO   xb) function returns a promise (takes function)
//TODO   xc) function takes a dispatch and ultimately fires the proper action
//TODO    d) need to work in api parameters for sort and page etc. 
//TODO    e) maybe make dataSource an object to accept various data retrieval configs
//TODO
//TODO

//TODO 3) bulk select
//TODO   a) two types of checkbox, each fires seperate action (header, row)
//TODO   b) keep row selection in store
//TODO
//TODO
//TODO 4) various callbacks for actions
//TODO 5) loading graphic
//TODO 6) error handling graphic
//TODO 7) no records graphic
//TODO
//TODO
//TODO
//TODO
//TODO
//TODO
//TODO
//TODO
//TODO
//TODO
