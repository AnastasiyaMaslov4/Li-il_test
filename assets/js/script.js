const menuEl = document.querySelector('.menu');

const data = {
    "services": [
        {
            "id": 1,
            "head": null,
            "name": "Проф.осмотр",
            "node": 0,
            "price": 100.0,
            "sorthead": 20
        },
        {
            "id": 2,
            "head": null,
            "name": "Хирургия",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 3,
            "head": 2,
            "name": "Удаление зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 10
        },
        {
            "id": 4,
            "head": 3,
            "name": "Удаление зуба",
            "node": 0,
            "price": 800.0,
            "sorthead": 10
        },
        {
            "id": 5,
            "head": 3,
            "name": "Удаление 8ого зуба",
            "node": 0,
            "price": 1000.0,
            "sorthead": 30
        },
        {
            "id": 6,
            "head": 3,
            "name": "Удаление осколка зуба",
            "node": 0,
            "price": 2000.0,
            "sorthead": 20
        },
        {
            "id": 7,
            "head": 2,
            "name": "Хирургические вмешательство",
            "node": 0,
            "price": 200.0,
            "sorthead": 10
        },
        {
            "id": 8,
            "head": 2,
            "name": "Имплантация зубов",
            "node": 1,
            "price": 0.0,
            "sorthead": 20
        },
        {
            "id": 9,
            "head": 8,
            "name": "Коронка",
            "node": 0,
            "price": 3000.0,
            "sorthead": 10
        },
        {
            "id": 10,
            "head": 8,
            "name": "Слепок челюсти",
            "node": 0,
            "price": 500.0,
            "sorthead": 20
        }
    ]
};

function getData() {
    return data.services;
}

function getHTML(elem) {
    let li = elem.node === 0 ? document.createElement('li'): document.createElement('ul');
    li.classList.add(`node`, `parent${elem.id}`);
    li.dataset.sorthead = elem.sorthead;
    li.innerHTML =  elem.price === 0 ? `${elem.name}` : `${elem.name} (${elem.price})`;
    return li;
}

function renderLay(arr, parent) {
    let layArr = arr.map(item => getHTML(item));

    layArr.sort(function(a,b) {
        if (a.dataset.sorthead > b.dataset.sorthead) return 1;
        if (a.dataset.sorthead < b.dataset.sorthead) return -1;
        else return 0;
    });

    parent.append(...layArr);
}

function renderMenu(data) {
    renderLay(data.filter(item => !item.head), menuEl);
    data.forEach(element => {
        if (element.node !== 0) {
            let parentNode = document.querySelector(`.parent${element.id}`);
            let childrensArr = data.filter(item => item.head === element.id);
            renderLay(childrensArr, parentNode);
        }
    });

}

renderMenu(getData());