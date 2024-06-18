import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Política de Privacidad</Text>
      <Text style={styles.date}>Última actualización: 18 de junio de 2024</Text>

      <Text style={styles.paragraph}>
        Bienvenido/a a Expo Votes. Tu privacidad es de suma importancia para nosotros. Esta política de privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestra aplicación.
      </Text>

      <Text style={styles.sectionHeader}>1. Información que Recopilamos</Text>
      <Text style={styles.paragraph}>
        Para garantizar la seguridad y autenticidad de tu voto, recopilamos y almacenamos la siguiente información:
      </Text>
      <Text style={styles.listItem}>- <Text style={styles.bold}>Videos de tu rostro:</Text> Durante el proceso de votación, grabamos un video de tu rostro para verificar tu identidad.</Text>
      <Text style={styles.listItem}>- <Text style={styles.bold}>Fotos de tu identificación:</Text> Tomamos dos fotos de tu identificación oficial, una de la parte frontal y otra de la parte posterior, para confirmar tu identidad.</Text>

      <Text style={styles.sectionHeader}>2. Uso de la Información</Text>
      <Text style={styles.paragraph}>
        Utilizamos la información recopilada para los siguientes fines:
      </Text>
      <Text style={styles.listItem}>- <Text style={styles.bold}>Verificación de identidad:</Text> Asegurarnos de que cada votante es quien dice ser, previniendo fraudes y garantizando la integridad del proceso de votación.</Text>
      <Text style={styles.listItem}>- <Text style={styles.bold}>Seguridad:</Text> Proteger la plataforma contra accesos no autorizados y actividades fraudulentas.</Text>

      <Text style={styles.sectionHeader}>3. Almacenamiento y Protección de Datos</Text>
      <Text style={styles.paragraph}>
        Nos comprometemos a proteger tu información personal. Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos contra accesos no autorizados, alteraciones, divulgación o destrucción.
      </Text>

      <Text style={styles.sectionHeader}>4. Compartición de Datos</Text>
      <Text style={styles.paragraph}>
        No compartimos tu información personal con terceros, excepto en los siguientes casos:
      </Text>
      <Text style={styles.listItem}>- <Text style={styles.bold}>Con tu consentimiento:</Text> Cuando hayas dado tu consentimiento explícito para compartir tu información.</Text>
      <Text style={styles.listItem}>- <Text style={styles.bold}>Obligaciones legales:</Text> Si es requerido por ley o en respuesta a procesos legales, como una orden judicial o una citación.</Text>

      <Text style={styles.sectionHeader}>5. Derechos del Usuario</Text>
      <Text style={styles.paragraph}>
        Tienes derecho a acceder, corregir, actualizar o eliminar tu información personal en cualquier momento. Para ejercer estos derechos, puedes ponerte en contacto con nosotros a través de contacto@expovotes.com.
      </Text>

      <Text style={styles.sectionHeader}>6. Cambios en esta Política de Privacidad</Text>
      <Text style={styles.paragraph}>
        Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Notificaremos cualquier cambio publicando la nueva política de privacidad en nuestra aplicación. Te recomendamos revisar esta política periódicamente para estar al tanto de cualquier actualización.
      </Text>

      <Text style={styles.sectionHeader}>7. Contacto</Text>
      <Text style={styles.paragraph}>
        Si tienes alguna pregunta o inquietud sobre esta política de privacidad, por favor contáctanos a través de contacto@expovotes.com.
      </Text>

      <Text style={styles.thankYou}>
        Gracias por confiar en Expo Votes. Tu privacidad y seguridad son nuestra prioridad.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  thankYou: {
    fontSize: 14,
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default PrivacyPolicy;
