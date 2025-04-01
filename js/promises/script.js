const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
        header: true,
        complete: handleCsvRead,
    });
};

const handleCsvRead = (res) => {
    const { data, errors } = res;
    if (errors.length > 0) {
        alert("Error!");
        console.log("error: ", errors);
    } else {
        renderUI(data);
    }
};

const parent = document.getElementById("parent");

const renderUI = (data) => {
    data.forEach((obj) => {
        const { studentName, githubLink, rollNumber } = obj;
        const username = githubLink.split("/").pop();

        const newCard = document.createElement("div");
        newCard.className = "row-card";
        newCard.innerHTML = `
            <div class="left">
                <h3>${studentName} (${username})</h3>
                <h4>Roll Number: ${rollNumber}</h4>
                <a href="${githubLink}" target="_blank">Open Github</a>
                <section>
                </section>
            </div>
            <div class="right">
                <img src="">
            </div>
        `;

        const pr1 = fetch(`https://api.github.com/users/${username}`);
        pr1.then((res) => {
            const pr2 = res.json();
            pr2.then((info) => {
                const { name, company, bio, location, avatar_url } = info;
                const imgElem = newCard.getElementsByTagName("img")[0];
                imgElem.src = avatar_url;
                const sectionElem = newCard.querySelector("section");
                sectionElem.innerHTML = `
                    <p>✅ ${name}</p>
                    <p>🏢 ${company}</p>
                    <p>ℹ️ ${bio}</p>
                    <p>📍 ${location}</p>
                `;
            });
        });

        parent.appendChild(newCard);
    });
};
