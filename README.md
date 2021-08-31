# react-table-pagination
react table using pagination &amp; propTypes &amp; eslint 

# using pagination
//add ./utils/paginate.js<br />
**import lodash from "lodash";**
**export function paginate(items, activePageNumber, pageSize)**<br />
//начальный индех элемента<br />
**const startIndex = (activePageNumber - 1) * pageSize;**<br />
//отрежет массив начиная со startIndex<br />
**lodash.slice(items,startIndex)**<br />
//количество элементов которые берем с этого массива pageSize<br />
**lodash.take(lodash.slice(items, startIndex), pageSize)**<br />
//все вместе используя канкатенацию<br />
**return lodash(items).slice(startIndex).take(pageSize).value();**<br />
}<br />
<br />
//import in users file<br />
**import {paginate} from '../utils/paginate'**<br />
//using paginate<br />
**const userCrop = paginate(users, activePage, pageSize)**<br />
...<br />


# using eslint<br />
//in .eslintrc.js<br />
...<br />
**rules: {<br />
indent: "off",<br />
"no-tabs": 0,<br />
semi: 0,<br />
quotes: "off",<br />
"space-before-function-paren": ["error", "never"],<br />
"spaced-comment": 0,<br />
"comma-spacing": "off",<br />
"array-bracket-spacing": ["error", "never"],<br />
"object-curly-spacing": ["error", "never", {arraysInObjects: true,objectsInObjects: true}],<br />
"computed-property-spacing": ["error", "never"],<br />
"comma-dangle": [2, "always-multiline"],<br />
"react/prop-types": "off",**<br />
},<br />
...<br />
<br />

# using PropTypes<br />
**import PropTypes from 'prop-types';**<br />
//in User file<br />
...<br />
**User.propTypes = {<br />
user: PropTypes.object.isRequired,<br />
index: PropTypes.number.isRequired,<br />
onDelete: PropTypes.func.isRequired,<br />
onToggleBookmark: PropTypes.func.isRequired,<br />
}**<br />
export default User;<br />
