const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  //console.log(xhr.response)
});

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();

//18A
const greetings = new XMLHttpRequest();

greetings.addEventListener("load", () => {
  console.log("18A: " + greetings.response);
});

greetings.open("GET", "https://supersimplebackend.dev/greeting");
greetings.send();

//18B
fetch("https://supersimplebackend.dev/greeting")
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    console.log("18B: " + text);
  });

//18C
async function getGreetings() {
  const response = await fetch("https://supersimplebackend.dev/greeting");
  const result = await response.text();

  console.log("18C: " + result);
}
getGreetings();

//18D
async function postGreeting() {
  const response = await fetch("https://supersimplebackend.dev/greeting", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "SuperSimpleDev",
    }),
  });

  const text = await response.text();
  console.log(text);
}

postGreeting();

//18F
async function getAmaz() {
  const url = "https://amazon.com";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
    console.log(`CORS error. Your request was blocked by the backend.`)
  }
}

getAmaz();

//18E
/*
async function getAmazon() {
  const response = await fetch("https://amazon.com");
  const text = await response.text();
  console.log(text);
}
getAmazon();
*/

async function postGreeting2() {
  try{
    const response = await fetch ('https://supersimplebackend.dev/greeting',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status >= 400){
      throw response
    }

    const text = await response.text();
    console.log(text);
  }
  catch(error){
    if(error.status === 400){
      const errorMessage = await error.json();
      console.log(errorMessage)
    }
    else{
      console.log('Network error. Please try again letter')
    }
  }
}
postGreeting2();