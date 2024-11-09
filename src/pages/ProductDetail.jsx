import React, { useEffect, useState } from 'react'
import ProductService from '../services/productService';
import { useParams } from 'react-router-dom'
//import { CardMeta,CardHeader,CardGroup,CardDescription,CardContent,Button,Card,Image} from 'semantic-ui-react'

export default function ProductDetail() {
    let { name } = useParams()

    const [product, setProduct] = useState({});

    useEffect(()=>{
      let productService = new ProductService()
      productService.getByProductName(name).then(result=>setProduct(result.data.data))
    })

    return (
        <div>
            {/* {
               
            
            <CardGroup>
                <Card fluid>
                    <CardContent>
                        <Image
                            floated='right'
                            size='mini'
                            src=''
                        />
                        <CardHeader>{product.productName}</CardHeader>
                        <CardMeta>{product.category ? product.category.categoryName : 'Kategori Yok'}</CardMeta>
                        <CardDescription>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </CardGroup> } */}
        </div>
    )
}
