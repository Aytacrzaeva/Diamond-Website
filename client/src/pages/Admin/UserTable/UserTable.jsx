import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:8080/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  };

  const handleEdit = (productCode) => {
    console.log(`Düzenle: ${productCode}`);
    // Seçilen ürünün detaylarını alın
    const selectedProduct = products.find(product => product.productCode === productCode);
    // Seçilen ürünün detaylarını backend'e güncelleme isteği gönderin
    axios.put(`http://localhost:8080/products/${productCode}`, selectedProduct)
      .then(response => {
        console.log('Ürün güncellendi:', response.data);
        // Ürünü güncellemek için frontend tarafındaki state'i de güncelleyebilirsiniz
        // setProducts ile güncellenen veriyi state'e ekleyebilirsiniz
      })
      .catch(error => console.log('Hata:', error));
  };

  const handleDelete = (productCode) => {
    console.log(`Sil: ${productCode}`);
    // Seçilen ürünü backend'den silme işlemini gerçekleştirin
    axios.delete(`http://localhost:8080/products/${productCode}`)
      .then(response => {
        console.log('Ürün silindi:', response.data);
        // Ürünü silmek için frontend tarafındaki state'i de güncelleyebilirsiniz
        // setProducts ile güncellenen veriyi state'den kaldırabilirsiniz
      })
      .catch(error => console.log('Hata:', error));
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
                    <Button startIcon={<EditIcon />} onClick={() => handleEdit(product.productCode)}>
                      Edit
                    </Button>
                    <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(product.productCode)}>
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

export default UserTable;
