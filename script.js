async function fetchData() {
    const res = await fetch ("https://cat-fact.herokuapp.com/facts");
    const record=await res.json();
    document.getElementById("rf1").innerHTML= record[0].text;}
fetchData();