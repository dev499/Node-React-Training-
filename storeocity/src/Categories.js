import React from "react";
import { Link } from "react-router-dom";
import './Categories.css'

function Categories() {
  return (
      <div>
    <div className="category">
      <div className="card" style={{width:'18rem'}}>
        <img src="https://i.pinimg.com/originals/64/59/70/64597009aae3cf5ef4ceff7506a30038.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
            <Link to={'/categories/mens'}>
        <button type="button" class="btn btn-info">Men'S Wear</button>
        </Link>
        </div>
      </div>
      <div className="card" style={{width:'16rem'}}>
        <img src="https://i.pinimg.com/originals/a0/73/16/a073169439ca3a351bd7be73cb700400.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <Link to={'/categories/womens'}>
        <button type="button" class="btn btn-info">Women'S Wear</button>
        </Link>
        </div>
      </div>
      <div className="card" style={{width:'16rem'}}>
        <img src="https://www.lookslikefilm.com/wp-content/uploads/2019/05/Aga-Andrews-www.aga-andrews.uk_.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <Link to={'/categories/kids'}>
        <button type="button" class="btn btn-info">Kids Wear</button>
        </Link>
        </div>
      </div>
    </div>
    <div className="category">
    <div className="card" style={{width:'18rem'}}>
        <img src="https://i.pinimg.com/originals/2e/f7/f4/2ef7f467c5c7d5c9046a4c868dc330a4.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
        <Link to={'/categories/watches'}>
        <button type="button" class="btn btn-info">Watches</button>
        </Link>
        </div>
      </div><div className="card" style={{width:'18rem'}}>
        <img src="https://images.unsplash.com/photo-1620783770629-122b7f187703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top" alt="..." />
        <div className="card-body">
        <Link to={'/categories/accessories'}>
        <button type="button" class="btn btn-info">Accessories</button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Categories;
