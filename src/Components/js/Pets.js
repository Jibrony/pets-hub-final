import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import moment from 'moment';
import '../css/Pets.css'; // Asegúrate de que el archivo CSS se importe correctamente
import BackgroundImage from './Background';
import '../css/Card.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import '../css/Header.css';

function Pets() {
  const [reports, setReports] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [petsForAdoption, setAnimal] = useState([]);
  const URL = 'https://lucky-enchantment-production.up.railway.app/mascotas';
  useEffect(() => {
    let data = { token: localStorage.getItem('sesion') };
    if (!(petsForAdoption.length > 0)) {
      console.log('ENTRO');
      axios.get(URL, { headers: { token: localStorage.getItem('sesion') } })
        .then(function (response) {
          console.log(response.data);
          if (response.status === 200) {
            setAnimal(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
          alert('An error occurred during login');
        });
    }
  }, []);

  const addReport = (report) => {
    setReports([report, ...reports]);
  };

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className='pets-container'>
      <Navbar />
      <BackgroundImage src="https://i.ibb.co/YW2fSYk/bgg-minimalista.jpg" />
      <img src='https://i.ibb.co/713NLcc/7.jpg' className='encabezado-mascotas'></img>
      <div className="container">
        <div className="text-center mb-4">
          <Button className='btn-card' variant="primary" onClick={handleShowForm}>Añadir Mascota</Button>
        </div>
        <div className="row justify-content-center">
          {petsForAdoption.map((pet, i) => (
            <MyPetsCard key={i} pet={pet} />
          ))}
        </div>
        {/* Modal para el formulario */}
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir Mascota</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReportForm addReport={addReport} />
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-modal' variant="secondary" onClick={handleCloseForm}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
function MyPetsCard({ pet }) {
  const [showModal, setShowModal] = useState(false);
  const [vacunas, setVacunas] = useState([]);
  const columns = [
    {
      name: 'Dueño',
      selector: row => row.nombre_usuario,
      sortable: true,
    },
    {
      name: 'Vacuna',
      selector: row => row.vacuna,
      sortable: true,
    },
    {
      name: 'Sucursal',
      selector: row => row.sucursal,
      sortable: true,
    },
    {
      name: 'Duracion',
      selector: row => row.duracion,
      sortable: true,
    },
    {
      name: 'Fecha de Aplicacion',
      selector: row => moment(row.fecha_cuando_se_vacuno).format('DD/MM/YYYY'),
      sortable: true,
    }
  ];
  const consultarVacunas = async (idMascota) => {
    await axios.get(`https://lucky-enchantment-production.up.railway.app/vacunas-mascotas/${idMascota}`, { headers: { token: localStorage.getItem('sesion') } }).then(
      response => {
        if (response.data.data) {
          setVacunas(response.data.data);
        }
      }
    ).catch((error) => {
      console.log(error);
    });

  };
  useEffect(() => {
    if (showModal) {

      consultarVacunas(pet.id_mascota)
    }
  }, [showModal]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const statusStyle = {
    backgroundColor: pet.status === 'Perdido' ? 'red' : 'green',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src="https://i.ibb.co/0C6Rp2Q/Captura-de-pantalla-2024-06-11-a-la-s-5-38-56-p-m.png" alt={pet.name} className='card-img'/>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                        <Card.Title className="text-center">{pet.nombre_mascotas}</Card.Title>
                        <Card.Text>Edad: {pet.edad}</Card.Text>
                        <Card.Text>{pet.tipo_mascota}</Card.Text>
                    </div>
                    <Button variant="primary" className="btn-card align-self-center mt-2" onClick={handleOpenModal}>Ver</Button>
                </Card.Body>
            </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{pet.nombre_mascota}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tipo de Mascota: {pet.tipo_mascota}</p>
          <p>Raza: {pet.raza}</p>
          <p>Edad: {pet.edad} años</p>
          <DataTable
            columns={columns}
            data={vacunas}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function ReportForm({ addReport }) {
  const URLM = 'https://lucky-enchantment-production.up.railway.app/mascotas';
  const [form, setForm] = useState({
    petName: '',
    photo: 'asdads',
    typeOfPet: '',
    age: '',
    breed: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReport = {
      ...form,
      id: Date.now(),
      image: "asd",
    };
    let data = { token: localStorage.getItem('sesion'), form };
    await axios.post(URLM, data).then(
      respuesta => window.location.reload()
    ).catch(error => console.log(error));
    setForm({
      petName: '',
      photo: 'asdads',
      typeOfPet: '',
      age: '',
      breed: ''
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="petName" value={form.petName} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Foto</Form.Label>
        <Form.Control type="file" name="image" accept="image/*" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control type="text" name="age" value={form.age} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Raza</Form.Label>
        <Form.Control type="text" name="breed" value={form.breed} onChange={handleChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tipo de Mascota</Form.Label>
        <Form.Control as="select" name="typeOfPet" value={form.typeOfPet} onChange={handleChange} required>
          <option value="">Selecciona</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-3">Subir Mascota</Button>
    </Form>
  );
}


export default Pets;
