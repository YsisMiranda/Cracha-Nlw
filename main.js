const usersSocial = {
  github: "YsisGMiranda",
  youtube: "rocketseat",
  linkedin: "in/ysis-gonçalvces-miranda",
  instagram: "ysis_miranda",
  facebook: "ysismiranda"
}

function changeSocialUsernames() {
  for (const li of socialUsernames.children) {
    const socialLink = li.getAttribute("class");
    // const changedSocialLink = `https://www.${socialLink}.com/${usersSocial[socialLink]}`;
    // li.children[0].href = changedSocialLink;
    li.children[0].href = `https://www.${socialLink}.com/${usersSocial[socialLink]}`;
  }
  fetch(url)
    .then(response => response.json())
    .then(dataInJson => {
      const { name, login, avatar_url, bio, html_url } = dataInJson;
      developerName.innerText = name;
      biography.innerText = bio;
      githubUsername.innerText = login;
      avatarImage.src = avatar_url;
      githubLinkProfile.href = html_url;
    });
}

changeSocialUsernames();
getGithubProfileInfos();