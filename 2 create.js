db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )


 db.inventory.insertOne(
    { item: "hello", qty: 150, tags: ["red","black"], size: { h: 28, w: 35.5, uom: "cm" } }
 )

db.inventory.insertMany(
 [{ item: "canvas", qty: 100, tags: ["rock"], size: { h: 28, w: 35.5, uom: "cm" } },{ item: "paint", qty: 100, tags: ["mud"], size: { h: 28, w: 35.5, uom: "cm" } },{ item: "cool", qty: 100, tags: ["plant"], size: { h: 28, w: 35.5, uom: "cm" } }]

)