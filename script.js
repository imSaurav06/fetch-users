const userList = document.getElementById("userList");
const errorMsg = document.getElementById("errorMsg");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUserData() {
  userList.innerHTML = "";
  errorMsg.textContent = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();

    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.innerHTML = `
        <strong>${user.name}</strong><br />
        📧 ${user.email}<br />
        📍 ${user.address.street}, ${user.address.city}
      `;
      userList.appendChild(userCard);
    });

  } catch (error) {
    errorMsg.textContent = "Failed to fetch user data. Please check your connection.";
  }
}

reloadBtn.addEventListener("click", fetchUserData);

// Fetch data on first load
fetchUserData();
