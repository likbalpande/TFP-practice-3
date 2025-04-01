const abcd = (x) => {
    console.log("changed !!", x.target.value);

    if (x.target.value === "Likhilesh") {
        x.target.style.background = "lime";
    } else {
        x.target.style.background = "red";
    }
};
const temp = (y) => {
    if (y.key === "H") {
        y.preventDefault();
    }
    console.log("key up !!", y.target.value);
};
const handleKeyDown = (z) => {
    if (z.key === "H") {
        z.preventDefault();
    }
    console.log("key down !!", z.target.value);
};
