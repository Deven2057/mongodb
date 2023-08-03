db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])


 //skip and limit
 db.inventory.find().limit(1)
 db.inventory.find().skip(1)


//sorting
 db.inventory.find().sort({qty:1})   //ascending order
 db.inventory.find().sort({qty:-1})   //decending order

 //pageing

 db.inventory.find().skip(1).limit(10) //show 1 to 10 page