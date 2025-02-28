import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  list = [{
      "name": "Aniseed Syrup",
      "price": 190,
      "discount": 0.19,
      "date": "2000-03-16"
    },
    {
      "name": "Change",
      "price": 19,
      "discount": 0,
      "date": "1982-12-18"
    },
    {
      "name": "Aniseed Syrup",
      "price": 10,
      "discount": 0,
      "date": "1973-06-14"
    },
    {
      "name": "Chef Anton\u0027s Cajun Seasoning",
      "price": 22,
      "discount": 0,
      "date": "1976-03-10"
    }, {
      "name": "Chef Anton\u0027s Gumbo Mix",
      "price": 21.35,
      "discount": 0,
      "date": "1978-12-06"
    }, {
      "name": "Grandma\u0027s Boysenberry Spread",
      "price": 25,
      "discount": 0.03,
      "date": "1981-09-03"
    }, {
      "name": "Uncle Bob\u0027s Organic Dried Pears",
      "price": 30,
      "discount": 0.03,
      "date": "1983-03-13"
    }, {
      "name": "Northwoods Cranberry Sauce",
      "price": 40,
      "discount": 0.04,
      "date": "1972-02-26"
    }, {
      "name": "Mishi Kobe Niku",
      "price": 97,
      "discount": 0.1,
      "date": "1985-12-10"
    }, {
      "name": "Ikura",
      "price": 31,
      "discount": 0.03,
      "date": "1994-03-23"
    }, {
      "name": "Queso Cabrales",
      "price": 21,
      "discount": 0,
      "date": "1985-11-28"
    }, {
      "name": "Queso Manchego La Pastora",
      "price": 38,
      "discount": 0.04,
      "date": "1988-08-27"
    }, {
      "name": "Konbu",
      "price": 6,
      "discount": 0.5,
      "date": "2002-07-01"
    }, {
      "name": "Tofu",
      "price": 23.25,
      "discount": 0,
      "date": "2002-06-24"
    }, {
      "name": "Genen Shouyu",
      "price": 15.5,
      "discount": 0,
      "date": "1991-05-04"
    }, {
      "name": "Pavlova",
      "price": 17.45,
      "discount": 0,
      "date": "1996-11-09"
    }, {
      "name": "Alice Mutton",
      "price": 39,
      "discount": 0.04,
      "date": "2007-12-15"
    }, {
      "name": "Carnarvon Tigers",
      "price": 62.5,
      "discount": 0.06,
      "date": "2011-04-13"
    }, {
      "name": "Teatime Chocolate Biscuits",
      "price": 9.2,
      "discount": 0.5,
      "date": "2005-02-02"
    }, {
      "name": "Sir Rodney\u0027s Marmalade",
      "price": 81,
      "discount": 0.08,
      "date": "2007-11-01"
    }, {
      "name": "Sir Rodney\u0027s Scones",
      "price": 10,
      "discount": 0,
      "date": "2010-07-29"
    }, {
      "name": "Gustaf flower",
      "price": 21,
      "discount": 0,
      "date": "2008-12-01"
    }, {
      "name": "Tunnbr Korea",
      "price": 9,
      "discount": 0.5,
      "date": "2011-08-31"
    }, {
      "name": "Guarana¡ Fanta¡stica",
      "price": 4.5,
      "discount": 0.45,
      "date": "2008-03-13"
    }, {
      "name": "NuNuCa Nuaa-Nougat-Creme",
      "price": 14,
      "discount": 0,
      "date": "2011-07-20"
    }, {
      "name": "Gumbar Gummibarchen",
      "price": 31.23,
      "discount": 0.03,
      "date": "2009-04-17"
    }, {
      "name": "Schoggi Schokolade",
      "price": 43.9,
      "discount": 0.04,
      "date": "2007-01-14"
    }, {
      "name": "Russle Sauerkraut",
      "price": 45.6,
      "discount": 0.05,
      "date": "2011-01-14"
    }, {
      "name": "Tharinger Rostbratwurst",
      "price": 123.79,
      "discount": 0.12,
      "date": "2010-12-21"
    }, {
      "name": "Nord-Ost Matjeshering",
      "price": 25.89,
      "discount": 0.03,
      "date": "2011-05-14"
    }, {
      "name": "Gorgonzola Telino",
      "price": 12.5,
      "discount": 0,
      "date": "2010-10-30"
    }, {
      "name": "Mascarpone Fabioli",
      "price": 32,
      "discount": 0.03,
      "date": "2011-07-30"
    }, {
      "name": "Geitost",
      "price": 2.5,
      "discount": 0.25,
      "date": "2010-04-29"
    }, {
      "name": "Sasquatch Ale",
      "price": 14,
      "discount": 0,
      "date": "2010-07-30"
    }, {
      "name": "Steeleye Stout",
      "price": 18,
      "discount": 0,
      "date": "2011-04-25"
    }, {
      "name": "Inlagd Sill",
      "price": 19,
      "discount": 0,
      "date": "1980-11-28"
    }, {
      "name": "Gravad lax",
      "price": 26,
      "discount": 0.03,
      "date": "1983-08-31"
    }, {
      "name": "Cate de Blaye",
      "price": 263.5,
      "discount": 0.26,
      "date": "1981-07-12"
    }, {
      "name": "Chartreuse verte",
      "price": 18,
      "discount": 0,
      "date": "1984-04-08"
    }, {
      "name": "Boston Crab Meat",
      "price": 18.4,
      "discount": 0,
      "date": "1976-12-08"
    }, {
      "name": "Jack\u0027s New England Clam Chowder",
      "price": 9.65,
      "discount": 0.5,
      "date": "1979-09-10"
    }, {
      "name": "Singaporean Hokkien Fried Mee",
      "price": 14,
      "discount": 0,
      "date": "1973-11-21"
    }, {
      "name": "Ipoh Coffee",
      "price": 46,
      "discount": 0.05,
      "date": "1980-03-20"
    }, {
      "name": "Gula Malacca",
      "price": 19.45,
      "discount": 0,
      "date": "1970-10-25"
    }, {
      "name": "Rogede sild",
      "price": 9.5,
      "discount": 0.5,
      "date": "1990-09-21"
    }, {
      "name": "Spegesild",
      "price": 12,
      "discount": 0,
      "date": "1993-06-23"
    }, {
      "name": "Zaanse koeken",
      "price": 9.5,
      "discount": 0.5,
      "date": "1981-11-25"
    }, {
      "name": "Chocolade",
      "price": 12.75,
      "discount": 0,
      "date": "1984-08-24"
    }, {
      "name": "Maxilaku",
      "price": 20,
      "discount": 0,
      "date": "1987-05-23"
    }, {
      "name": "Valkoinen suklaa",
      "price": 16.25,
      "discount": 0,
      "date": "1990-02-17"
    }, {
      "name": "Manjimup Dried Apples",
      "price": 53,
      "discount": 0.05,
      "date": "2004-05-22"
    }, {
      "name": "Filo Mix",
      "price": 7,
      "discount": 0.5,
      "date": "2001-05-20"
    }, {
      "name": "Perth Pasties",
      "price": 32.8,
      "discount": 0.03,
      "date": "2007-01-06"
    }, {
      "name": "Tourtiare",
      "price": 7.45,
      "discount": 0.5,
      "date": "2009-10-07"
    }, {
      "name": "Pacta chinois",
      "price": 24,
      "discount": 0,
      "date": "2007-07-08"
    }, {
      "name": "Gnocchi di nonna Alice",
      "price": 38,
      "discount": 0.04,
      "date": "2007-05-18"
    }, {
      "name": "Ravioli Angelo",
      "price": 19.5,
      "discount": 0,
      "date": "2010-02-16"
    }, {
      "name": "Escargots de Bourgogne",
      "price": 13.25,
      "discount": 0,
      "date": "2011-07-26"
    }, {
      "name": "Raclette Courdavault",
      "price": 55,
      "discount": 0.05,
      "date": "2007-09-22"
    }, {
      "name": "Camembert Pierrot",
      "price": 34,
      "discount": 0.03,
      "date": "2010-06-20"
    }, {
      "name": "Sirop d\u0027aOrable",
      "price": 28.5,
      "discount": 0.03,
      "date": "2007-05-29"
    }, {
      "name": "Tarte au sucre",
      "price": 49.3,
      "discount": 0.05,
      "date": "2008-01-21"
    }, {
      "name": "Vegie-spread",
      "price": 43.9,
      "discount": 0.04,
      "date": "2007-11-21"
    }, {
      "name": "Wimmers gute Semmelknadel",
      "price": 33.25,
      "discount": 0.03,
      "date": "2009-05-15"
    }, {
      "name": "Louisiana Fiery Hot Pepper Sauce",
      "price": 21.05,
      "discount": 0,
      "date": "2008-05-15"
    }, {
      "name": "Louisiana Hot Spiced Okra",
      "price": 17,
      "discount": 0,
      "date": "2011-02-10"
    }, {
      "name": "Laughing Lumberjack Lager",
      "price": 14,
      "discount": 0,
      "date": "2010-12-05"
    }, {
      "name": "Scottish Longbreads",
      "price": 12.5,
      "discount": 0,
      "date": "2009-07-08"
    }, {
      "name": "Gudbrandsdalsost",
      "price": 36,
      "discount": 0.04,
      "date": "2011-03-09"
    }, {
      "name": "Outback Lager",
      "price": 15,
      "discount": 0,
      "date": "2009-02-21"
    }, {
      "name": "Flotemysost",
      "price": 21.5,
      "discount": 0,
      "date": "1980-09-04"
    }, {
      "name": "Mozzarella di Giovanni",
      "price": 34.8,
      "discount": 0.03,
      "date": "1983-06-03"
    }, {
      "name": "Rad Kaviar",
      "price": 15,
      "discount": 0,
      "date": "1982-12-03"
    }, {
      "name": "Longlife Tofu",
      "price": 10,
      "discount": 0.5,
      "date": "1982-09-27"
    }, {
      "name": "RhanbrAu Klosterbier",
      "price": 7.75,
      "discount": 0.5,
      "date": "1982-10-31"
    }, {
      "name": "Lakkalik AAri",
      "price": 18,
      "discount": 0,
      "date": "1970-07-28"
    }, {
      "name": "Original Frankfurter grane Soae",
      "price": 13,
      "discount": 0,
      "date": "1976-04-04"
    }, {
      "name": "Chai",
      "price": 19,
      "discount": 0,
      "date": "1984-04-04"
    }, {
      "name": "Mishi Kobe Niku",
      "price": 97,
      "discount": 0.1,
      "date": "1989-07-23"
    }
  ]
  itemPage: number = 10;
  curPage: number = 1;
  numberOfPage: number = (this.list.length%this.itemPage == 0 ) ? Math.floor(this.list.length/this.itemPage) : (Math.floor(this.list.length/this.itemPage) + 1 );
  nextPage() {
    if(this.curPage == this.numberOfPage){
      return 0;
    }else {
      this.curPage++;
    }
  }
  prevPage() {
    if(this.curPage <= 1){
      return 0;
    }else {
      this.curPage--;
    }
  }
  toPage(num) {
    this.curPage = num;
  }
  orderName: String = 'name';
  orderClick(name) {
    this.orderName = name;
  }
  constructor() {}

  ngOnInit() {}

}
