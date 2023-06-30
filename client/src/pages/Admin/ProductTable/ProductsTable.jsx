import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ProductsTable.scss';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.log('HTTP error:', response.status);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  };

  const handleEdit = async (productId) => {
    console.log(`Düzenle: ${productId}`);
    const selectedProduct = products.find(product => product.id === productId);
    try {
      const response = await fetch(`http://localhost:8080/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedProduct)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Ürün güncellendi:', data);
        setProducts(prevProducts =>
          prevProducts.map(product =>
            product.id === productId ? data : product
          )
        );
      } else {
        console.log('HTTP error:', response.status);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  };

  const handleDelete = async (productId) => {
    console.log(`Sil: ${productId}`);
    try {
      const response = await fetch(`http://localhost:8080/products/${productId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Ürün silindi:', productId);
        setProducts(prevProducts =>
          prevProducts.filter(product => product.id !== productId)
        );
      } else {
        console.log('HTTP error:', response.status);
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  };

  return (
    <div className="products-table">
      <h2>All Products</h2>
      <TableContainer component={Paper}>
        <Table>
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
              <TableRow key={product.id}>
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
                    <Button startIcon={<EditIcon />} onClick={() => handleEdit(product.id)}>
                      Edit
                    </Button>
                    <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(product.id)}>
                      Delete
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
