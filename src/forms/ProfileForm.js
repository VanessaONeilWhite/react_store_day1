import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import { TextField } from '@mui/material';

const FormSchema=Yup.object(
    {
        firstName:Yup.string().required(),
        lastName:Yup.string().required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password: Yup.string().required(),
        favoriteBook: Yup.string().reqruired(),
    }
)

export default function ProfileForm(user){ //from catform am I passing in user inplace of a category?
    const initialValues={
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        password: '',
        favoriteBook: user?.favoriteBook ?? '',
        //will this make them log their favorite book each time? I just want it when they register
        //I want the application to also print a random quote from literature. Can I use multiple apis?

    }

    const handleSubmit =(values, resetForm)=>{
        if (user){
            console.log('Editing Profile')
        }else{
            console.log('Creating Profile')
        }
        console.log(values)
        resetForm(initialValues)
    }
    
    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="firstName"
                name="firstName"
                fullWidth
                sx={{mb:2, mt:2}}
                label="First Name"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}            
            />
            <TextField
                id="lastName"
                name="lastName"
                fullWidth
                sx={{mb:2, mt:2}}
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}            
            />
            <TextField
                id="email"
                name="email"
                fullWidth
                sx={{mb:2, mt:2}}
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}            
            />
            <TextField
                id="password"
                name="password"
                fullWidth
                sx={{mb:2, mt:2}}
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}            
            />
            <Button type='submit' sx={{width:'100%'}}>{user ? 'Edit Profile' : 'Register'}</Button>
        </form>
//I think by not including the favorite book here I won't have to do it upon login each time?
//or I have to write a if user do not ask for favorite book? 
//if not user ask for favorite book?
    )

}