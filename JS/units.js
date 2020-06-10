export function addElement() {

    let element = document.createElement('div');
    element.classList.add('date');
    if (this.date === undefined) {
        this.date = new Date();
        fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm')
            .then(response => response.json())
            .then(data => this.renderPage(data));

    } else {
        let date = this.yyyymmdd(this.date.setDate(this.date.getDate() - 1));
        fetch('https://api.nasa.gov/planetary/apod?api_key=Vc2F9ggHHlrgTjgfjgKc9gGhm6Wnp4Hq27Tm0RCm&date=' + date)
            .then(response => response.json())
            .then(data => this.renderPage(data));
    }

    element.innerText = this.date;
    this.container.append(element);
}





export function renderPage(data) {

    let pageContainer = document.createElement('div');
    pageContainer.classList.add('main_container');
    pageContainer.setAttribute('id', this.id);
    this.container.prepend(pageContainer);

    let title = document.createElement('h1');
    title.innerText = data.title;
    pageContainer.append(title);

    let image = document.createElement('div');
    image.classList.add('image');
    if (data.media_type === 'video') {
        let video = document.createElement('iframe');
        video.setAttribute('src', data.url);
        video.setAttribute('width', '420');
        video.setAttribute('height', '300');
        image.append(video);
    } else {
        let picture = document.createElement('img');
        picture.setAttribute('src', data.hdurl);
        picture.setAttribute('id', 'picture');
        image.append(picture);
    }
    pageContainer.append(image);

    let explataionText = document.createElement('p');
    explataionText.classList.add('explanation');
    explataionText.innerText = data.explanation;
    pageContainer.append(explataionText);

    if (data.copyright) {
        let copyright = document.createElement('span');
        copyright.innerText = data.copyright;
        pageContainer.append(copyright);
    }
    this.container.classList.remove('spinner');
}

export function yyyymmdd() {
    var now = this.date;
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + y + '-' + mm + '-' + dd;
}