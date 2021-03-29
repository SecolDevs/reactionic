import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useContext, useEffect } from 'react'
import SaludarContext from '../context/saludar/SaludarContext'
import { useFormik } from 'formik'

const Formulario = ({ name }: { name: string }) => {
  const saludarContext = useContext(SaludarContext)

  const { nombre, handleName } = saludarContext

  useEffect(() => {
    handleName('Pepe')
  }, [])

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
    },
    onSubmit: (data) => {
      console.log(`Nombre: ${data.nombre} | Apellido: ${data.apellido}`)
    },
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Hola {nombre}</h1>
        <form onSubmit={formik.handleSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput
                type="text"
                name="nombre"
                value={formik.values.nombre}
                onIonChange={formik.handleChange}
                onIonBlur={formik.handleBlur}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Apellido</IonLabel>
              <IonInput
                type="text"
                name="apellido"
                value={formik.values.apellido}
                onIonChange={formik.handleChange}
                onIonBlur={formik.handleBlur}
              />
            </IonItem>
            <IonButton type="submit" color="primary" expand="block">
              Enviar
            </IonButton>
          </IonList>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default Formulario
