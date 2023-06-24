import { useState, useEffect } from 'react';
import { login, logOut, register, currentUser } from './utils/apiUser';
import {
  createVisitor,
  getAllVisitors,
  getVisitorById,
  editVisitor,
  deleteVisitor,
} from './utils/apiVisitors';
import { Toaster } from 'react-hot-toast';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import CollapseForm from 'components/collapseForm/collapseForm';
import TableVisitors from './components/table/table';
import { ModalWindow, ModalWindowDelete } from 'components/modal/modal';

export default function App() {
  const [visitors, setVisitors] = useState([]);
  const [loginCredentials, setLoginCredentials] = useState(null);
  const [registerCredentials, setRegisterCredentials] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [newVisitor, setNewVisitor] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [visitorId, setVisitorId] = useState(null);
  const [visitor, setVisitor] = useState({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    if (!loginCredentials) return;
    const loginRequest = async () => {
      const res = await login(loginCredentials);
      if (res?.status === 200) {
        setIsLogin(true);
      }
    };
    loginRequest();
    setLoginCredentials(null);
  }, [loginCredentials, isLogin]);

  useEffect(() => {
    if (!registerCredentials) return;
    const registerRequest = async () => {
      await register(registerCredentials);
    };
    registerRequest();
    setLoginCredentials(null);
  }, [registerCredentials]);

  useEffect(() => {
    const getCurrent = async () => {
      const res = await currentUser();
      if (res) {
        setUser(res.data.email);
        setIsLogin(true);
        const getVisitors = async () => {
          const res = await getAllVisitors();
          setVisitors(res?.data);
        };
        getVisitors();
      } else {
        setVisitors(null);
      }
    };
    getCurrent();
  }, [newVisitor, isLogin]);

  useEffect(() => {
    if (!newVisitor) return;
    const addVisitor = async () => {
      await createVisitor(newVisitor);
    };
    addVisitor();
    setNewVisitor(null);
  }, [newVisitor]);

  const handleLogout = () => {
    setIsLogin(false);
    logOut();
  };

  const handleVisitorById = id => {
    const visitorByID = async () => {
      const res = await getVisitorById(id);
      setVisitor(res);
      setVisitorId(id);
      setEditModal(!editModal);
    };
    visitorByID();
  };

  const handleEditVisitor = e => {
    e.preventDefault();
    const updatedVisitor = {
      firstName: e.target[0].value,
      lastName: e.target[2].value,
    };
    editVisitor(visitorId, updatedVisitor);
    setVisitor({
      firstName: '',
      lastName: '',
    });
    setVisitorId(null);
  };

  const handleDeleteVisitor = id => {
    setDeleteModal(!deleteModal);
    setVisitorId(id);
  };

  const closeEditModal = () => {
    setEditModal(false);
    setVisitor({
      firstName: '',
      lastName: '',
    });
  };

  const confirmDeletion = () => {
    deleteVisitor(visitorId);
  };

  const cancelDeletion = () => {
    setVisitorId(null);
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      <Toaster />
      <Header
        onLoginSubmit={credentials => setLoginCredentials(credentials)}
        onRegisterSubmit={credentials => setRegisterCredentials(credentials)}
        onLogOutClick={handleLogout}
        isLogin={isLogin}
      />
      <Hero user={user} />
      <CollapseForm
        onFormSubmit={data => setNewVisitor(data)}
        isLogin={isLogin}
      />
      <TableVisitors
        isLogin={isLogin}
        visitors={visitors}
        onEditClick={handleVisitorById}
        onDeleteClick={handleDeleteVisitor}
      />
      <ModalWindow
        modalName={editModal}
        toggleModal={closeEditModal}
        text="Edit Visitor"
        handleMethod={handleEditVisitor}
        label1="First Name"
        label2="Last Name"
        visitor={visitor}
      />
      <ModalWindowDelete
        modalName={deleteModal}
        toggleModal={() => setDeleteModal(!deleteModal)}
        confirmDeletion={confirmDeletion}
        cancelDeletion={cancelDeletion}
      />
    </>
  );
}
