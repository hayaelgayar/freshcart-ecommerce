"use client";
import  { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { cashOrder, shippingAddressType, visaOrder } from './payment'
import { cartContext } from '../_Providers/CartContext'
import { toast } from 'sonner'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation';

 
export default function Payment() {
    const router = useRouter();
 const form=useForm({
    defaultValues:{
        details:"",
        phone:"",
        city:"",
        type:"cash"
    }
 })

 const {cartId,setnumOfCartItems,setcartData}=useContext(cartContext)
 
 async function handlepayment(value) {
    const userData:shippingAddressType={
        shippingAddress:{
            city:value.city,
            phone:value.phone,
            details:value.details
        }
    }
    if(value.type=="cash"){
      const res=await  cashOrder(cartId,userData)
      console.log(res)
      setnumOfCartItems(0)
      setcartData(null)
      toast.success("order created",{position:"top-center"})
      router.push("/allorders")

    }
    else{
const res=await visaOrder(cartId,userData)
window.open(res.session.url)
    }
 }
 
 return<>
<h1 className='text-center text-4xl text-slate-900 my-10'>Payment</h1>
  <div className='container max-w-4xl mx-auto'>
<form  onSubmit={form.handleSubmit(handlepayment)}>
  <Controller
  name='details'
  control={form.control}
  render={({field,fieldState})=>(
    <Field data-invalid={fieldState.invalid}>
<FieldLabel htmlFor={field.name}>Details</FieldLabel>
    <Input {...field}
    id={field.name}
    aria-invalid={fieldState.invalid}
    placeholder='Enter your details'
    autoComplete='off'
    />
    {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
    </Field>
  )}
  
  />
  <br />
  <Controller
  name='phone'
  control={form.control}
  render={({field,fieldState})=>(
    <Field data-invalid={fieldState.invalid}>
<FieldLabel htmlFor={field.name}>Phone</FieldLabel>
    <Input {...field}
    id={field.name}
    aria-invalid={fieldState.invalid}
    placeholder='Enter your Phone'
    autoComplete='off'
    />
    {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
    </Field>
  )}
  
  />
  <br />
  <Controller
  name='city'
  control={form.control}
  render={({field,fieldState})=>(
    <Field data-invalid={fieldState.invalid}>
<FieldLabel htmlFor={field.name}>City</FieldLabel>
    <Input {...field}
    id={field.name}
    aria-invalid={fieldState.invalid}
    placeholder='Enter your City'
    autoComplete='off'
    />
    {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
    </Field>
  )}
  
  />
  <br />
  <Controller
  name="type"
  control={form.control}
  render={({ field }) => (
    <div className="space-y-3">
      <FieldLabel>Payment Method</FieldLabel>

      <label
        className={`flex items-center border rounded-lg p-4 cursor-pointer transition
        ${field.value === "cash" ? "border-indigo-600 bg-indigo-50" : "border-gray-200"}
        `}
      >
        <input
          type="radio"
          value="cash"
          checked={field.value === "cash"}
          onChange={field.onChange}
          className="mr-3"
        />

        <span className="font-medium">Cash on Delivery</span>
      </label>
      <label
        className={`flex items-center border rounded-lg p-4 cursor-pointer transition
        ${field.value === "visa" ? "border-indigo-600 bg-indigo-50" : "border-gray-200"}
        `}
      >
        <input
          type="radio"
          value="visa"
          checked={field.value === "visa"}
          onChange={field.onChange}
          className="mr-3"
        />

        <span className="font-medium">Pay Online (Visa)</span>
      </label>
<br />
    
    </div>
    
  )}
/>
    <button
  type="submit"
  className="w-full cursor-pointer bg-slate-600 text-white py-3 rounded-md hover:bg-slate-700 transition"
>
  Pay Now
</button>
</form>
<br /><br />

  </div>
  
  </>
}
