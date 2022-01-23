function loadProfileInfo() {
    getProfile().then(json=> {
        var title = document.getElementById('dynamic-username');
        title.innerText = json['name'];
        title.href = json['html_url'];

        document.getElementById('dynamic-profile-picture').src = json['avatar_url'];
        document.getElementById('dynamic-followers-counter').innerText = `${json['followers']} Followers`;     
        console.log(json); 
    });
}

function loadRepo(index) {
    const repos = [
        'CSharpDiscordWebhook', 
        'CSharpAlgorithms',
        'PastebinAPI',
        'NetLib'
    ];

    if(index >= repos.length)
        return;

    getRepoData(repos[index]).then(json=> {
        createRepoObject(json);
        index++;

        loadRepo(index);
    });
}

loadProfileInfo();
loadRepo(0);