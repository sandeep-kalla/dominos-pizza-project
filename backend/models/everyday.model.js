import mongoose from "mongoose"
const everydaySchema = new mongoose.Schema({
  id: {type: Number,required: true,},
  name: {type: String,required: true},
  price: {type: String,required: true},
  menu_description: {type: String,required:true},
  classifications: {type: Boolean,required:true},
  assets: {
    menu: [{url: { type: String, required: true }}],product_details_page: [{url: { type: String, required: true }}]}
  });

const everydayModel = mongoose.model('pizzavalues',everydaySchema)

export default everydayModel;