function createSvg(pathStr) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('width', '16');
    svg.setAttribute('data-view-component', 'true');

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', pathStr);

    svg.appendChild(path);
    return svg;
}

function createRepoUrl(name, url) {
    var p = document.createElement('p');
    p.classList.add('url');

    var a = document.createElement('a');
    a.innerText = name;
    a.href = url;

    var svg = createSvg('M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z');
    p.appendChild(svg);
    p.appendChild(a);

    return p;
}

function createRepoDescription(description) {
    var p = document.createElement('p');
    p.classList.add('description');

    p.innerText = description;
    return p;
}

function createRepoInfo(lang, stars, forks) {
    var div = document.createElement('div');
    div.classList.add('info');

    var langSpan = document.createElement('span');
    langSpan.innerText = lang;

    var starSpan = document.createElement('span');
    starSpan.innerText = stars;

    var forkSpan = document.createElement('span');
    forkSpan.innerText = forks;

    var starSvg = createSvg('M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z');
    var forkSvg = createSvg('M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z');

    div.appendChild(langSpan);

    div.appendChild(starSvg);
    div.appendChild(starSpan);

    div.appendChild(forkSvg);
    div.appendChild(forkSpan);

    return div;
}

function createRepoObject(json) {
    console.log(json);


    var repo = document.createElement('div');
    repo.classList.add('repo');

    var url = createRepoUrl(json['name'], json['html_url']); 
    var description = createRepoDescription(json['description']);
    var info = createRepoInfo(json['language'], json['stargazers_count'], json['forks']);

    repo.appendChild(url);
    repo.appendChild(description);
    repo.appendChild(info);

    document.getElementById('dynamic-repos-list').appendChild(repo);
}

function expand(src) {
    var div = src.parentElement;
    div.classList.remove('expandable');
    div.children[0].classList.remove('collapsed');
    src.parentElement.removeChild(src);
}