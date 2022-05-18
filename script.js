async function fetchData() {
    const res1 = await fetch ("https://cat-fact.herokuapp.com/facts");
    const record1 = await res1.json();
    document.getElementById("cat-fact").innerHTML= record1[1].text;
}
fetchData();