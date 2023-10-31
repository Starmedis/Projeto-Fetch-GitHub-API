async function getFollowers(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}octocat/followers/`)
    return await response.json()
}

export { getFollowers }