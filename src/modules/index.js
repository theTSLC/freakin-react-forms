import columnReducer from './columnModule';
import dataRowReducer from './dataRowModule';
import headerReducer from './headerModule';

export default { columns: columnReducer, tableData: dataRowReducer, header:headerReducer };
