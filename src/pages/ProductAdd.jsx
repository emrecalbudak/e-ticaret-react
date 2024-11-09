import { Form, Formik } from 'formik'
import React from 'react'
import { Button} from 'semantic-ui-react';
import * as Yup from "yup";
import CustomTextInput from '../utilities/CustomTextInput';

export default function ProductAdd() {
    const initialValues = {productName:"", unitPrice:10}
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice : Yup.number().required("Ürün fiyatı zorunlu")
    })

  return (
        <Formik initialValues={initialValues} 
        validationSchema={schema} 
        onSubmit={(values)=>{
            console.log(values)
        }}>
            <Form className='ui form'>
                <CustomTextInput name="productName" placeholder="Ürün adı"/>
                <CustomTextInput name="unitPrice" placeholder="Ürün fiyatı"/>  
                <CustomTextInput name="unitInStock" placeholder="Stok adedi"/>  
                <CustomTextInput name="quantityPerUnit" placeholder="Birim fiyatı"/>  
                <CustomTextInput name="unitPrice" placeholder="Ürün fiyatı"/>  
                <Button color='green' type='submit'>Ekle</Button>
            </Form>
        </Formik>
  )
}