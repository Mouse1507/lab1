import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-dt',
  templateUrl: './product-dt.component.html',
  styleUrls: ['./product-dt.component.css']
})
export class ProductDTComponent implements OnInit {
  constructor(
    private route:ActivatedRoute
    ) { }
  listPD = [{
    "id": 1,
    "image": "leaf-rake.jpg",
    "name": "Leaf Rake",
    "code": "gdn-0011",
    "available": "March 19, 2016",
    "price": 19.95,
    "star": 3.2
  },
  {
    "id": 2,
    "image": "garden.jpg",
    "name": "Garden Cart",
    "code": "gdn-0023",
    "available": "March 18, 2016",
    "price": 32.99,
    "star": 4.1
  },
  {
    "id": 3,
    "image": "hammer.jpg",
    "name": "Hammer",
    "code": "tbx-0048",
    "available": "May 21, 2016",
    "price": 8.9,
    "star": 4.9
  },
  {
    "id": 4,
    "image": "saw.jpg",
    "name": "Saw",
    "code": "tbx-0022",
    "available": "May 15, 2016",
    "price": 11.55,
    "star": 3.9
  },
  {
    "id": 5,
    "image": "controller.jpg",
    "name": "Video Game Controller",
    "code": "gmg-0042",
    "available": "October 15, 2015",
    "price": 35.95,
    "star": 4.5
  }
]
  prod:any;
  prodId;
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.prodId = +param.get("id");
    })
    this.prod = this.listPD.find(prod => prod.id === this.prodId);
  }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
  }
}
