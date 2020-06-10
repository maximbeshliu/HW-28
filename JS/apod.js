
import { addElement as add, renderPage as render, yyyymmdd as dateConverter } from './units.js';

export function Apod(id) {
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('class', 'container');
    this.container.setAttribute('class', 'spinner');
    this.container.setAttribute('id', this.id);

    this.addElement = add;

    this.renderPage = render;


    this.yyyymmdd = dateConverter;
    this.addElement();
    body.prepend(this.container);
}




