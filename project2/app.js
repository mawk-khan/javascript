let data = [
    {
        name: 'Yakub',
        age : '33',
    },
    {
        name: 'Adil',
        age : '31'
    },
    {
        name: 'Arif',
        age : '29',
    },
    {
        name: 'Faheem',
        age : '40',
    },
    {
        name: 'Afsar',
        age : '31',
    },
    {
        name: 'Muzaffar',
        age : '33',
    }
]

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' Years old.' + '</div>';
});

info.innerHTML = details.join('\n')