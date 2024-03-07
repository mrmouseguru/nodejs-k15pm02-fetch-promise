export default class App {
  constructor() {
    this._onClick = this._onClick.bind(this);

    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClick);
  }

  _onClick(event) {
    console.log("Clicked !!!");
    let p = fetch("myfile.txt");//return promise + response
    p.then((response) =>{
        let p2 = response.text();//return promise + data text
        p2.then((text)=>{
          let p3 = fetch("person.json");//return a promise + response
          p3.then((response2) =>{
            let p4 = response2.json();//return promise + json data
            p4.then((obj) => {
              document.querySelector("#results").textContent = 
              `${text}\n${obj.givenName} ${obj.surname}`;
            });

          });
          
        });

    });
  }
}
