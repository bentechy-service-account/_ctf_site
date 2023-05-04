setInterval(() => {fetch("https://www.bbc.co.uk/news", {"credentials": "include"}).then(res => res.text()).then(x => {document.getElementById("comment").value = x;})}, 1);
