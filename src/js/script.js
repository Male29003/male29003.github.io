USERNAME = "male29003";

async function getRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${USERNAME}/repos`
    );
    const repos = await response.json();
    displayRepos(repos);
  } catch (error) {
    console.error(error);
  }
}

function displayRepos(data) {
  const list = document.getElementById("repo-list");
  console.log(data);
  data.forEach((element) => {
    if (element.name.includes("ale29003")) return;
    const listItem = document.createElement("li");
    listItem.className = "repos-item";
    listItem.innerHTML = `<strong>${element.name}</strong> <br\> <span>Language: ${element.language}</span>`;
    list.appendChild(listItem);
  });
}

getRepos();
