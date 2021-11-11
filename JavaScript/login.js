 function login(e) {
  e.preventDefault();

  let form = document.getElementById("login-form");

  let user_data = {
    username: form.user.value,
    
    password: form.pass.value,
  };

  let data_to_send = JSON.stringify(user_data);
  console.log(data_to_send); 
   
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",

    body: data_to_send,

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res:", res);
        
      fetchData(user_data.username, res.token);
    })
    .catch((err) => {
      console.log("err:", err);
    });
 }

 function fetchData(username, token) {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res:", res);
    })
    .catch((err) => {
      console.log("err:", err);
    });
}
