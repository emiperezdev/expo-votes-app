import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function NotFoundScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a /HomeTab en cuanto se monta el componente
    router.replace('/HomeTab');
  }, []);

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
