import React from "react";
import { useState } from "react";
import './ESearchBar.css'
import t1 from './t1.jpg'
import b1 from './b1.jpg'
import s1 from './s1.jpg'
import t2 from './t2.jpg'
import b2 from './b2.jpg'
import s2 from './s2.jpg'
import t3 from './t3.jpg'
import b3 from './b3.jpg'
import s3 from './s3.jpg'


function App() {

    let product = document.querySelectorAll('.product');
    function search() {
        let findvalue = document.getElementById('searchItem').value.toUpperCase();
        console.log(findvalue)

        



        for (let i = 0; i < product.length; i++) {
         let names = product[i].getElementsByTagName('h2')[0];
         if(names){
            let match = names.textContent || names.innerHTML;
            if(match.toUpperCase().indexOf(findvalue)>-1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
         }
        }
    }

    const [intext, setIntext] = useState("")

    const inpchng = (e) =>{
        setIntext(e.target.value)
    }


  return (
   <>
   <div className="bodycont">
    <header>
        <h1>Mephisto Sales</h1>
    </header>
    <div className="container">
        <div className="inp">
        <form>
            <input type="text" id="searchItem" onKeyUp={search} onChange={inpchng} value={intext} placeholder="Search Products" autoComplete="off"/>
        </form>
    </div>
        <div className="product-list" id="productlist">
            <div className="product">
                <img src={t1} alt=""/>
                <div className="p-details">
                    <h2>Tshirt Bucher</h2>
                    <h3>Mrp-$22</h3>
                </div>
            </div>
            <div className="product">
                <img src={b1} alt=""/>
                <div className="p-details">
                    <h2>Laviro Bags</h2>
                    <h3>Mrp-$42</h3>
                </div>
            </div>
            <div className="product">
                <img src={s1} alt=""/>
                <div className="p-details">
                    <h2>Crix Sneakers</h2>
                    <h3>Mrp-$32</h3>
                </div>
            </div>
            <div className="product">
                <img src={t2} alt=""/>
                <div className="p-details">
                    <h2>Tshirt Nexa</h2>
                    <h3>Mrp-$12</h3>
                </div>
            </div>
            <div className="product">
                <img src={b2} alt=""/>
                <div className="p-details">
                    <h2>Noziro Bag</h2>
                    <h3>Mrp-$52</h3>
                </div>
            </div>
            <div className="product">
                <img src={s2} alt=""/>
                <div className="p-details">
                    <h2>Jordan Sneakers</h2>
                    <h3>Mrp-$29</h3>
                </div>
            </div>
            <div className="product">
                <img src={t3} alt=""/>
                <div className="p-details">
                    <h2>Tshirt Locas</h2>
                    <h3>Mrp-$58</h3>
                </div>
            </div>
            <div className="product">
                <img src={b3} alt=""/>
                <div className="p-details">
                    <h2>Retro Bags</h2>
                    <h3>Mrp-$229</h3>
                </div>
            </div>
            <div className="product">
                <img src={s3} alt=""/>
                <div className="p-details">
                    <h2>Qz Sneakers</h2>
                    <h3>Mrp-$72</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
   </>
  );
}

export default App;
