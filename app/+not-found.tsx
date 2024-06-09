import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/HomeTab');
    }, 0); // Puedes ajustar el retraso si es necesario

    return () => clearTimeout(timeout);
  }, [router]);

  return null; // No renderizar nada, ya que redirigimos inmediatamente
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
