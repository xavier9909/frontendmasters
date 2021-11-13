 function login(e) {
  e.preventDefault();
  
  let form = document.getElementById("login-form");

  let user_data = {
    username: form.user.value,

    password: form.pass.value,
  };

  let data_to_send = JSON.stringify(user_data);
    
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
      if(res.error) {
        alert(`${res.message}`);
      }else {

        fetchData(user_data.username, res.token); 
      
      }    
     
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

      alert(`Welcome ${res.name +" "+ res.description}`);

        let frontend_user = {
          firstname : res.name,
          lastname : res.description,
          username : res.username,
          email : res.email,
          card : res.mobile, 
          token : res.token,
        };
  
        localStorage.setItem("frontend_user", JSON.stringify(frontend_user));
        
       window.location.assign("./pricing.html")
    })
    .catch((err) => {
      console.log("err:", err);
      
    });
 } 
