import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ProductsTable.scss';

const ProductsTable = () => {
  const products = [
    {
      name: 'Product 1',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 4.5,
      inStock: true,
      size: 'L',
      price: 19.99,
      productCode: 'ABC123'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    },
    {
      name: 'Product 2',
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"],
      rating: 3.8,
      inStock: false,
      size: 'M',
      price: 14.99,
      productCode: 'DEF456'
    }
    // Diğer ürünler...
  ];

  const handleEdit = (productCode) => {
    console.log(`Düzenle: ${productCode}`);
  };

  const handleDelete = (productCode) => {
    console.log(`Sil: ${productCode}`);
  };

  return (
    <div className="products-table">
      <h2>All Products</h2>
      <TableContainer>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Images</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>In Stock</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Product Code</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.productCode}>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} className="product-image" />
                  ))}
                </TableCell>
                <TableCell>{product.rating}</TableCell>
                <TableCell>{product.inStock ? 'Yes' : 'No'}</TableCell>
                <TableCell>{product.size}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.productCode}</TableCell>
                <TableCell>
                  <div className="action-buttons">
                    <Button  startIcon={<EditIcon />} onClick={() => handleEdit(product.productCode)}>
                      Edit
                    </Button>
                    <Button  startIcon={<DeleteIcon />} onClick={() => handleDelete(product.productCode)}>
                      
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsTable;
