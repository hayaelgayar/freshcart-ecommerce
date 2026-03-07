"use client"
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import {  useRouter } from 'next/navigation';
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner';
import { LoginType } from '@/types/loginType';
import { loginSchema } from '@/schemas/login';
import { loginFormInput } from '@/constants/login-inputs';
import { signIn } from 'next-auth/react';
import Link from 'next/link';



export default function Login() {
  const router=useRouter()
const [loading, setloading] = useState(false);
  const form =useForm({
    defaultValues: {
      email:"",
      password:"",
    },
    resolver:zodResolver(loginSchema)
  })

const onSubmit = async (data: LoginType) => {
  setloading(true)

  const res = await signIn("credentials", {
    ...data,
    redirect: false
  })

  if (res?.ok) {
    toast.success("Welcome Back!", { position: "top-center" })
    router.push("/")
  } else {
    toast.error("Invalid email or password", { position: "top-center" })
  }

  setloading(false)
}
 

  return <>
  
  <br /><br />
  <form className='w-1/2 mx-auto' onSubmit={form.handleSubmit(onSubmit)}>
  
  <FieldGroup> 
 {loginFormInput.map(({name,placeholder})=>( 
  
  <Controller
  key={name}
  name={name as keyof LoginType} control={form.control} render={({field,fieldState})=><Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>{name}</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder={placeholder}
        autoComplete="off"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>}/>))}
 
   <Button disabled={loading} className='disabled:opacity-50 bg-green-800 text-white'>submit</Button>
 <Link href={""}>Forget Password?</Link>
 <br />
  </FieldGroup>

  </form>
 
  </>
}
