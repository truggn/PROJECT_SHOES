const HandleBars = require('handlebars');

module.exports = {
    sum : (a, b) => a + b ,
    sort_table: (field, sort) => {    
        const sortType = field === sort.column ? sort.type : 'default';
                                // sort table , truyen 2 tham so vao la fidle vs name.
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        }; // mang chua các icon
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }; 

        const type = types[sortType];
        const icon = icons[sortType];
        
        const href = HandleBars.escapeExpression(`?_sort&column=${field}&type=${type}`);

        const output =  `<a href="${href}"><span class ="${icon}"></span></a>`;
        return new HandleBars.SafeString(output);
        
        }
    }