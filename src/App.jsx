import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"; 
import { Container, TextField, Button, Card, CardContent, Typography, Grid } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const userCollectionRef = collection(db, "crud");

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    const docsRef = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    setUsers(docsRef);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const createUser = async () => {
    await addDoc(userCollectionRef, { name, age: Number(age) });
    setName("");
    setAge(0);
    getUsers(); 
  };

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "crud", id);
    const newAge = { age: age + 5 };
    await updateDoc(userDoc, newAge);
    getUsers(); 
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "crud", id);
    await deleteDoc(userDoc);
    getUsers(); 
  };

  return (
    
      <Container
        maxWidth="md"
        style={{
          marginTop: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%', 
        }}
      >
        <Typography variant="h4" gutterBottom>User Management</Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={8} md={6}> 
            <TextField 
              fullWidth 
              label="Enter your Name" 
              variant="outlined" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField 
              fullWidth 
              type="number" 
              label="Enter your Age" 
              variant="outlined" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Button variant="contained" color="primary" onClick={createUser} fullWidth>
              Create User
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: '20px', justifyContent: 'center' }}>
          {users.map((user) => (
            <Grid item xs={12} sm={8} md={6} key={user.id}> 
              <Card style={{ padding: '15px' }}>
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography variant="body1">Age: {user.age}</Typography>
                  <Button variant="contained" color="secondary" size="small" onClick={() => updateAge(user.id, user.age)} style={{ marginRight: '10px' }}>
                    Update Age
                  </Button>
                  <Button variant="contained" color="error" size="small" onClick={() => deleteUser(user.id)}>
                    Delete User
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    
  );
}

export default App;