import './EditProfile.css';

// UPLOADS
import { uploads } from '../../utils/config';

// HOOKS
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// REDUX
import { profile, resetMessage, updateProfile } from '../../slices/userSlice';

// COMPONENTS
import Message from '../../components/Message';

const EditProfile = () => {

  const dispatch = useDispatch();
  const { user, message, error, loading } = useSelector((state) => state.user);

  // STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  // LOAD USER DATA
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  // FILL FORM WITH USER DATA
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setBio(user.bio);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // GATHER USER DATA FROM STATES

    const userData = {
      name,
    };

    if (profileImage) {
      userData.profileImage = profileImage;
    }

    if (bio) {
      userData.bio = bio;
    }

    if (password) {
      userData.password = password;
    }

    //BUILD FORM DATA
    const formData = new FormData();

    const userFormData = Object.keys(userData).forEach((key) =>
      formData.append(key, userData[key]));

    formData.append('user', userFormData);

    await dispatch(updateProfile(formData));

    console.log(userFormData);

    setTimeout(() => { 
      dispatch(resetMessage());
    }, 2000);


  };

  const handleFile = (e) => {
    // IMAGE PREVIEW
    const image = e.target.files[0];

    setPreviewImage(image);

    // UPDATE IMAGE STATE
    setProfileImage(image);
  };
    
  return (
    <div id='edit-profile'>
      <h2>Edite seus dados</h2>
      <p
        className="subtitle">Adicione uma imagem de perfil e conte mais sobre você...
      </p>
      {(user.profileImage || previewImage) && (
        <img
          className='profile-image'
          src={
            previewImage
              ? URL.createObjectURL(previewImage)
              : `${uploads}/users/${user.profileImage}`
          }
          alt={user.name}
        />
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name || ''} />
        <input type="email" placeholder='E-mail' disabled value={email || ''} />
        <label>
          <span>Imagem do Perfil:</span>
          <input type="file" onChange={handleFile}/>
        </label>
        <label>
          <span>Bio:</span>
          <input type="text" placeholder='Descrição do perfil' onChange={(e) => setBio(e.target.value)} value={bio || ''} />
        </label>
        <label>
          <span>Quer alterar a senha?</span>
          <input type="password" placeholder='Digite sua nove senha' onChange={(e) => setPassword(e.target.value)} value={password || ''} />
        </label>
        {!loading && <input type='submit' value='Atualizar'/>}
        {loading && <input type='submit' value='Aguarde...'/>}
        {error && <Message msg={error} type='error' />}
        {message && <Message msg={message} type='success'/>}
      </form>
    </div>
  )
}

export default EditProfile