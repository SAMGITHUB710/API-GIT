const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    img: {
        type: String,
    
        
    },
    title: {
        type: String,
        enum:{
            values: ["NEWSPAPER","CARTON","OIL DABBA","NOTEBOOKS / BOOKS","OFFICE PAPER","OLD CLOTH","LIGHT IRON","HEAVY IRON","VEHICLE SCRAP","MIX PLASTIC","RO WATER PURIFIER","PLASTIC PET BOTTLES","MILK POUCH","STANLESS STEEL","ALUMINIUM","COPPER UTENSIL","COPPER CABLE","BRASS HARDWARE","BRASS UTENSILS","TOP LOAD WASHING MACHINE","REFRIGERATOR","COMPUTER FULL SET","DABBA COMPUTER","PRINTER","MICROWAVE","PLASTIC BAG","PVC PIPE","AIR CONDITIONER AC","TV","PVC INSULATED COPPER WIRE","PVC INSULATED ALUMINIUM WIRE","SHOES CHAPPAL","INVERTER BATTERY","BRASS TURNIG","S S 304 TURNIG","S S 316 TURNIG","ANOTHOR BHANGAR"],
            message:`{VALUE} is not supported`,
        }
    },
    price: {
        type: String,
        // required: [true, "price must be provided"],
    },
    SellNow:{
        type: String,
        required: true,
    },
    Donate: {
        type: String,
        required:true,
    },
});

module.exports = mongoose.model("Product", productSchema);