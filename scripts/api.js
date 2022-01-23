const user = 'N4T4NM'

async function getProfile() {
    const response = await fetch(`https://api.github.com/users/${user}`);
    return response.json();
}

async function getRepoData(repo) {
    const response = await fetch(`https://api.github.com/repos/${user}/${repo}`);
    return response.json();
}