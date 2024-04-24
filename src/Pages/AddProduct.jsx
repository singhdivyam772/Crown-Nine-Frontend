import React, { useState, useEffect } from 'react'
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify';
import axios from 'axios';


const AddProduct = () => {

   const [formData, setFormData] = useState({
      title: '',
      subtitle: '',
      category: '',
      mrp: '',
      price: '',
      materialType: '',
      metalType: '',
      plating: '',
      claspType: '',
      size1: '',
      size2: '',
      size3: '',
      color1: '',
      color2: '',
      color3: '',
      shape: '',
      specification: '',
      quality: '',
      gemType: '',
      itemWeight: '',
      workmanship: '',
      note: '',
      careInstructions: ''

   })

   const [sendData, setSendData] = useState({})

   useEffect(()=>{
      setSendData({
         productTitle: formData.title,
         productSubtitle: formData.subtitle,
         color1: formData.color1,
         color2: formData.color2,
         color3: formData.color3,
         size1: formData.size1,
         size2: formData.size2,
         size3: formData.size3,
         shape: formData.shape,
         specification: formData.specification,
         quality: formData.quality,
         gemType: formData.gemType,
         itemWeight: formData.itemWeight,
         workmanship: formData.workmanship,
         note: formData.note,
         careInstruction: formData.careInstructions
      })
   }, [formData])
   // Form change handler for individual fields
   const productChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
         ...prevState,
         [name]: value
      }));
   };

   const submitHandler = (e) => {
      e.preventDefault();
      console.log(formData)
      axios.post('http://localhost:3001/api/v1/addProductData', sendData)
      .then(() => {
        toast.success("Product Data Added !", {
          autoClose: 1000 // Set the duration to 2 seconds
        });
        setDisable(true)
      })
      .catch(() => {
        toast.error("Error Adding Product", {
          autoClose: 1000 // Set the duration to 2 seconds
        });
      });

      console.log(sendData)
   }

   return (
      <div className=' flex flex-col justify-start items-center w-screen min-h-screen px-5 '>
         <header className=' text-4xl font-medium leading-10 py-6 '>
            Add Your Product
         </header>

         {/* submit product details */}
         <form className=' w-full px-10 py-4 bg-slate-50' onSubmit={submitHandler}>

            {/* section 1 */}
            <section className=' w-full flex md:flex-row flex-col justify-between items-center my-4 px-5 py-4 border-[0.1rem] border-red-100'>
               {/* title */}
               <label
                  htmlFor="title"
                  className=' flex flex-col w-[25%]'
               >
                  <p className=' font-medium text-sm'>
                     Tittle*
                  </p>
                  <input
                     type="text"
                     name='title'
                     id='title'
                     value={formData.title}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* mrp */}
               <label
                  htmlFor="mrp"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     MRP*
                  </p>
                  <input
                     type="number"
                     name='mrp'
                     id='mrp'
                     value={formData.mrp}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* price */}
               <label
                  htmlFor="price"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Price*
                  </p>
                  <input
                     type="number"
                     name='price'
                     id='price'
                     value={formData.price}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* material type */}
               <label
                  htmlFor="materialType"
                  className=' flex flex-col w-[13%]'
               >
                  <p className=' font-medium text-sm'>
                     Material Type
                  </p>
                  <input
                     type="text"
                     name='materialType'
                     id='materialType'
                     value={formData.materialType}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* material type */}
               <label
                  htmlFor="quality"
                  className=' flex flex-col w-[13%]'
               >
                  <p className=' font-medium text-sm'>
                     Quality
                  </p>
                  <input
                     type="text"
                     name='quality'
                     id='quality'
                     value={formData.quality}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               <label
                  htmlFor="itemWeight"
                  className=' flex flex-col w-[13%]'
               >
                  <p className=' font-medium text-sm'>
                     Item Weight
                  </p>
                  <input
                     type="text"
                     name='itemWeight'
                     id='itemWeight'
                     value={formData.itemWeight}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* Metal type */}
               <label
                  htmlFor="metalType"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Metal Type
                  </p>
                  <input
                     type="text"
                     name='metalType'
                     id='metalType'
                     value={formData.metalType}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>
               {/* Category Dropdown */}
               <div className=''>

               </div>

            </section>

            {/* section 2 */}
            <section className=' w-full flex md:flex-row flex-col justify-between items-center my-4 px-5 py-4 border-[0.1rem] border-red-100'>
               {/* Plating */}
               <label
                  htmlFor="plating"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Plating
                  </p>
                  <input
                     type="text"
                     name='plating'
                     id='plating'
                     value={formData.plating}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* claspType */}
               <label
                  htmlFor="claspType"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Clasp Type
                  </p>
                  <input
                     type="text"
                     name='claspType'
                     id='claspType'
                     value={formData.claspType}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>
               {/* size1 */}
               <label
                  htmlFor="size1"
                  className=' flex flex-col w-[5%]'
               >
                  <p className=' font-medium text-sm'>
                     Size1
                  </p>
                  <input
                     type="text"
                     name='size1'
                     id='size1'
                     value={formData.size1}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* size2 */}
               <label
                  htmlFor="size2"
                  className=' flex flex-col w-[5%]'
               >
                  <p className=' font-medium text-sm'>
                     Size2
                  </p>
                  <input
                     type="text"
                     name='size2'
                     id='size2'
                     value={formData.size2}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* size3 */}
               <label
                  htmlFor="size3"
                  className=' flex flex-col w-[5%]'
               >
                  <p className=' font-medium text-sm'>
                     Size3
                  </p>
                  <input
                     type="text"
                     name='size3'
                     id='size3'
                     value={formData.size3}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* color1 */}
               <label
                  htmlFor="color1"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Color1
                  </p>
                  <input
                     type="text"
                     name='color1'
                     id='color1'
                     value={formData.color1}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* color2 */}
               <label
                  htmlFor="color2"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Color2
                  </p>
                  <input
                     type="text"
                     name='color2'
                     id='color2'
                     value={formData.color2}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* color3 */}
               <label
                  htmlFor="color3"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Color3
                  </p>
                  <input
                     type="text"
                     name='color3'
                     id='color3'
                     value={formData.color3}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>
               {/* shape */}
               <label
                  htmlFor="shape"
                  className=' flex flex-col w-[10%]'
               >
                  <p className=' font-medium text-sm'>
                     Shape
                  </p>
                  <input
                     type="text"
                     name='shape'
                     id='shape'
                     value={formData.shape}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

            </section>

            {/* section 3 */}
            <section className=' w-full flex md:flex-row flex-col justify-between items-center my-4 px-5 py-4 border-[0.1rem] border-red-100'>

               {/* Description */}
               <label
                  htmlFor="subtitle"
                  className=' flex flex-col w-[20%]'
               >
                  <p className=' font-medium text-sm'>
                     Description
                  </p>
                  <Textarea
                     type="text"
                     name='subtitle'
                     id='subtitle'
                     value={formData.subtitle}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* specification */}
               <label
                  htmlFor="specification"
                  className=' flex flex-col w-[20%]'
               >
                  <p className=' font-medium text-sm'>
                     Specification
                  </p>
                  <Textarea
                     type="text"
                     name='specification'
                     id='specification'
                     value={formData.specification}
                     onChange={productChangeHandler}
                     className=' px-2 border-[0.15rem] border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* Workmanship */}
               <label
                  htmlFor="workmanship"
                  className=' flex flex-col w-[20%]'
               >
                  <p className=' font-medium text-sm'>
                     Workmanship
                  </p>
                  <Textarea
                     type="text"
                     name='workmanship'
                     id='workmanship'
                     value={formData.workmanship}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>
            </section>

            {/* section 4 */}
            <section className=' w-full flex md:flex-row flex-col justify-start gap-5 items-center my-4 px-5 py-4 border-[0.1rem] border-red-100'>
               {/* note */}
               <label
                  htmlFor="note"
                  className=' flex flex-col w-[20%]'
               >
                  <p className=' font-medium text-sm'>
                     Note
                  </p>
                  <Textarea
                     type="text"
                     name='note'
                     id='note'
                     value={formData.note}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>

               {/* CareInstructions */}
               <label
                  htmlFor="careInstructions"
                  className=' flex flex-col w-[20%]'
               >
                  <p className=' font-medium text-sm'>
                     Care Instructions
                  </p>
                  <Textarea
                     type="text"
                     name='careInstructions'
                     id='careInstructions'
                     value={formData.careInstructions}
                     onChange={productChangeHandler}
                     className=' border-[0.15rem] px-2 border-slate-400 text-black rounded-md'
                  />
               </label>


            </section>
            <Button className=' px-5 py-2'>Submit</Button>
         </form>
      </div>
   )
}

export default AddProduct
