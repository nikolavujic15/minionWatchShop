import categoryModel from "../models/categoryModel.js"
import slugify from "slugify";

export const createCategoryController = async(req,res)=> {
   try {
    const {name} = req.body;
    if(!name){
        return res.status(401).send({message:'Ime je obavezno'})
    }
    const existingCategory = await categoryModel.findOne({name})
    if(existingCategory){
        return res.status(200).send({
            succes:false,
            message:'Kategorija vec postoji'
        })
    }
    const kategorije = await new categoryModel({name,  slug: slugify(name)}).save()
    res.status(201).send({
        success:true,
        message:"nova kategorija je kreirana",
        kategorije,
    })
   } catch (error) {
    res.status(500).send({
        succes:false,
        error,
        message:"greska u kategoriji"
    })
   }

}

//izmena kategorije
export const updateCategoryController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const kategorije = await categoryModel.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "Kategorija izmenjena",
        kategorije,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Greska u izmeni kategorije",
      });
    }
  };

  export const categoryControlller = async (req, res) => {
    try {
      const kategorije = await categoryModel.find({});
      res.status(200).send({
        success: true,
        message: "Lista svih kategorija",
        kategorije,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Greska u zahtevu za sve kategorije",
      });
    }
  };

  export const singleCategoryController = async (req, res) => {
    try {
      const kategorije = await categoryModel.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Jedna kategorija prosla",
        kategorije,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Greska u jednoj kategoriji",
      });
    }
  };

  export const deleteCategoryCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await categoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Kategorija izbrisana",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Greska u brisanju kategorije",
        error,
      });
    }
  };