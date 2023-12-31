db.inventory.find()  // fetch all the documentary
db.inventory.find({item:"canvas"}) 
db.inventory.find({qty:150}) 

db.inventory.find( { tags: { $in: [ "red", "D" ] } } )

db.inventory.find({item:"canvas"})


db.inventory.find( { $or: [ { item: "canvas" }, { qty: 150 } ] } )
db.inventory.find( { $or: [ { item: "canvas" }, { item: "cool" } ] } )
 

db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);


 db.inventory.find( { status: "D" } )
 db.inventory.find( { status: { $in: [ "A", "D" ] } } )
 db.inventory.find( { status: "A", qty: { $lt: 30 } } )
 db.inventory.find( { item: { $in: [ "journal", "notebook" ] } } )